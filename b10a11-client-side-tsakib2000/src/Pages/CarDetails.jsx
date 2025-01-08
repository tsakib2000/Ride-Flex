/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "./../Hooks/useAuth";
import DatePicker from "react-datepicker";

const CarDetails = () => {
  const axiosSecure=useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    fetchCar();
  }, [id]);
  const fetchCar = async () => {
    try {
      const { data } = await axiosSecure(`/car/${id}`);
      setCar(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const {
    _id,
    carModel,
    dailyRentalPrice,
    availability,
    vehicleRegistrationNumber,
    description,
    features,
    photo,
    owner,
  } = car || {};

  const handleBook = async () => {

    if(endDate === null) return toast.error('Please give End date')
    document.getElementById("my_modal_5").showModal();

    const booking = {
      carId: _id,
      carModel,
      dailyRentalPrice,
      description,
      photo,
      vehicleRegistrationNumber,
startDate,
endDate,
      client: user?.email,
      owner,
      booking_status: "confirmed",
    };

    try {
      await axiosSecure.post("/Add-booking", booking);
      toast.success("Booking successful");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <div className=" my-8">
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-[1000px] mx-auto">
        <figure className="lg:w-full md:h-96">
          <img className="w-full h-full object-cover" src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{carModel}</h2>
          <p>{description}</p>
          <p> Registration Number: {vehicleRegistrationNumber}</p>
          <p>Price : ${dailyRentalPrice}/day</p>

          <p>Availability: {availability}</p>
          <p>
            Features:{" "}
            {features?.map((f, idx) => (
              <span key={idx}>{f},</span>
            ))}
          </p>
          <p className="py-4">Owner Email :{owner}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() =>{ 
                if(user?.email === owner) return toast.error('You can not book your own car')  
                document.getElementById("my_modal_5").showModal()}
              }
              className="btn bg-amber-400"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box py-28">
          <h3 className="font-bold text-xl text-center">
            Your Booking is in Process
          </h3>
          <h3 className="font-semibold text-lg">Model{carModel}</h3>
          <p className="py-4">Vehicle Number: {vehicleRegistrationNumber}</p>
          <p className="py-4">Rent :$ {dailyRentalPrice} /day</p>

          <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700">Start</label>

            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
           
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700">End</label>

            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 rounded-md"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
           
            />
          </div>
          </div>
          <div className="modal-action justify-center">
            <form method="dialog" className="w-full">
              <button className="btn w-full bg-amber-200" onClick={handleBook}>
                Book
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CarDetails;
