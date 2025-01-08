require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt=require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: ["http://localhost:5173",'https://car-rental-e5aee.web.app','https://car-rental-e5aee.firebaseapp.com/' ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized access: No token provided' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized access: Invalid token' });
    }
    req.user = decoded;
    next(); 
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.jz4kt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("Cars-DB");
 
    const reviewCollection = db.collection("UserReview");
    const AllCarCollection = db.collection("Available-cars");
    const BookingCollection = db.collection("Booking-car");
    
    //Generate JWT
    app.post('/jwt',async(req,res)=>{
      const email = req.body;
   const token =jwt.sign(email,process.env.SECRET_KEY,{expiresIn:'5h'})
 res.cookie('token',token,{
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
 })
 .send({success:true})
    })

    //Log Out
    app.post('/logout',async(req,res)=>{
      res.clearCookie('token',{
        maxAge:0,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      }).send({success:true});
    })



    //get user review
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // Add cars to DB
    app.post("/add-car", verifyToken,async (req, res) => {
      const car = req.body;

      const result = await AllCarCollection.insertOne(car);
      res.send(result);
    });

    //Get cars
    app.get("/all-cars", async (req, res) => {
      const availability = req.query.availability;
      const search = req.query.search;

      const sort = req.query.sort;
      let options = {};
      let query = {};
      if (sort) {
        options = { sort: { datePosted: sort === "asc" ? 1 : -1 } };
      }
      query = {
        carModel: {
          $regex: String(search),
          $options: "i",
        },
      };

      if (availability) {
        query.availability = availability;
      }

      const result = await AllCarCollection.find(query, options).toArray();
      res.send(result);
    });

    //Get single car
    app.get("/car/:id", verifyToken,async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await AllCarCollection.findOne(query);
      res.send(result);
    });

    //Post booking
    app.post("/Add-booking", verifyToken,async (req, res) => {
      const bookingData = req.body;
      const query = { client: bookingData.client, carId: bookingData.carId };
      const alreadyExist = await BookingCollection.findOne(query);
      if (alreadyExist)
        return res.status(400).send("You have already booked this car");

      const result = await BookingCollection.insertOne(bookingData);

      const filter = { _id: new ObjectId(bookingData.carId) };
      const update = {
        $inc: {
          bookingCount: 1,
        },
      };
      const updateBooking = await AllCarCollection.updateOne(filter, update);
      res.send(result);
    });
// Get user booking
    app.get("/bookings/:email", verifyToken,async (req, res) => {
      const decodedEmail=req.user?.email;
      const email = req.params.email;
      if(decodedEmail !== email){
        return res.status(401).send({message:'unauthorized access'})
      }
      const query = {client : email};
      const result = await BookingCollection.find(query).toArray();
      res.send(result);
    });

    //get single booking

    app.get('/booking/:id',verifyToken,async(req,res)=>{
      const id=req.params.id;
      const query={_id : new ObjectId(id)}
      const result= await BookingCollection.findOne(query);
      res.send(result);
    })

    // update Booking 
app.patch('/update-booking-date/:id',verifyToken,async(req,res)=>{
  const id=req.params.id;
  const date=req.body;
  const query={_id : new ObjectId(id)}
  const update = {
    $set: {...date},
  };
  const result= await BookingCollection.updateOne(query,update)
  res.send(result)
})

//cancel booking
app.patch('/cancel/:id',verifyToken,async(req,res)=>{
  const id=req.params.id;
  const cancel=req.body;
  const query={_id : new ObjectId(id)}
  const update = {
    $set: cancel,
  };
  const result= await BookingCollection.updateOne(query,update)
  res.send(result)
})
    //getAllLatest card
    app.get("/latestCars",async (req, res) => {
      const result = await AllCarCollection.find()
        .sort({ datePosted: -1 })
        .limit(6)
        .toArray();
      res.send(result);
    });

    // get my cars
    app.get("/my-cars/:email",verifyToken,async (req, res) => {
      const decodedEmail=req.user?.email;
      const email = req.params.email;
      if(decodedEmail !== email){
        return res.status(401).send({message:'unauthorized access'})
      }
      const sort = req.query.sort;
      const query = { owner: email };
      let options={}
      if (sort) {
        options = { sort: { datePosted: sort === "asc" ? 1 : -1 } };
      }
      const result = await AllCarCollection.find(query,options).toArray();
      res.send(result);
    });
    // Update my cars
    app.put("/update-car/:id", verifyToken,async (req, res) => {
      const car = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: car,
      };
      const result = await AllCarCollection.updateOne(query, update);
      res.send(result);
    });
    //Delete My cars
    app.delete('/delete-car/:id',verifyToken,async(req,res)=>{
      const id= req.params.id;
    const query={_id: new ObjectId(id)}
    const result= await AllCarCollection.deleteOne(query);
    res.send(result)
    })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Car in running");
});

app.listen(port, () => {
  console.log(`Car server is running on ${port}`);
});
