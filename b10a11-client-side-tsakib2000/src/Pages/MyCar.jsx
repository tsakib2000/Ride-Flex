/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import useAuth from "../Hooks/useAuth";
import MyCarTable from "../Components/MyCarTable";
import Modal from "../Components/Modal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import MyCarEmptyState from "../Components/MyCarEmptyState";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyCar = () => {
  const axiosSecure=useAxiosSecure();
    const{user}=useAuth();
    const [sort,setSort]=useState('')
    const [cars,setCars]=useState([]);
    const [modalCar, setModalCar] = useState(null);
    useEffect(()=>{
        fetchMyCar();
    },[user,sort])
    const fetchMyCar=async ()=>{
        try{
const {data}=await axiosSecure.get(`/my-cars/${user?.email}?sort=${sort}`)
setCars(data)
        }catch(err){
            console.log(err);
        }
    }


    const handleUpdate=async (id) => {
      
   
      const {data}= await axiosSecure.get(`/car/${id}`)

      setModalCar(data);
      document.getElementById("my_modal_4").showModal();
    };
 const handleDelete=async id=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then( async (result)=> {
    if (result.isConfirmed) {
      try{
        await axiosSecure.delete(`/delete-car/${id}`)
        fetchMyCar();
        Swal.fire({
          title: "Deleted!",
          text: "Your Car has been deleted.",
          icon: "success"
        });
      }catch(err){
        toast.error(err.message)
      }
     
    }
  });

 }

 const handleSortByPrice=(order)=>{
  
  const newCars = [...cars].sort((a,b)=>{{
     const priceA = parseInt(a.dailyRentalPrice) 
     const priceB= parseInt(b.dailyRentalPrice)
    return order === "asc" ? priceA - priceB : priceB - priceA;}});
  setCars(newCars)
 
 
 }


    return (<>
     {
      cars.length <=0 ? <MyCarEmptyState/> :   <div>

        <h1 className="text-2xl md:text-4xl font-bold text-center my-8"> Manage Your Cars</h1>
      <div className="flex justify-center gap-4 my-5">
        
      <div className="">
                <select
                   onChange={(e)=>handleSortByPrice(e.target.value)}
                  name="category"
                  id="category"
                  className="border p-4 rounded-lg"
                 
                >
                  <option value="">Sort by Price</option>
                  <option  value="asc">Lowest First</option>
                  <option value="dsc"> Highest First</option>
                </select>
              </div>
      
              <div>
                <select
                  onChange={(e)=>setSort(e.target.value)}
                  name="category"
                  id="category"
                  className="border p-4 rounded-lg"
               
                >
                  <option value="">Sort by Date</option>
                  <option value="asc">Oldest First  </option>
                  <option value="dsc">Newest First </option>
                </select>
              </div>
      </div>
          <div className="overflow-x-auto">
        <table className="table table-auto">
          {/* head */}
          <thead>
            <tr className="*:text-xl">
         
              <th className="">Car Image</th>
              <th className="">Car Model</th>
              <th>Rent</th>
              <th>Booking Count</th>
              <th>Availability</th>
              <th>Date</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
        {
          cars?.map(car=>  <MyCarTable key={car._id} car={car} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)
        }
      
          </tbody>
      
      
        </table>
      </div>
      <Modal modalCar={modalCar} fetchMyCar={fetchMyCar}/>
      
              </div>
     }
        </>
    );
};

export default MyCar;