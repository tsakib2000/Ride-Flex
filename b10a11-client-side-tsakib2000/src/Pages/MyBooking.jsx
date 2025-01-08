/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import MyBookingTable from "../Components/MyBookingTable";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import CarChart from "../Components/CarChart";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyBooking = () => {
  const axiosSecure=useAxiosSecure();
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [modalBooking, setModalBooking] = useState(null);
  const [startDate, setStartDate] = useState(modalBooking?.startDate);
  const [endDate, setEndDate] = useState(modalBooking?.endDate);
  useEffect(() => {
    fetchMyBookings();
  }, [user, modalBooking]);
  const fetchMyBookings = async () => {
    try {
      const { data } = await axiosSecure.get(`/bookings/${user?.email}`);
      setBookings(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleUpdateDate = async (id) => {
    document.getElementById("my_modal_8").showModal();

    try {
      const { data } = await axiosSecure.get(`/booking/${id}`);
      setModalBooking(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleUpdateDateToDb = async (id) => {
    try {
      const updatedDate = { startDate, endDate };
      await axiosSecure.patch(`/update-booking-date/${id}`, updatedDate);
      toast.success("Date Modification successful");
      fetchMyBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelBooking =async (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this booking",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then( async (result)=> {

        if (result.isConfirmed) {
            const booking_status={booking_status:'canceled'}
            try{
                await axiosSecure.patch(`/cancel/${id}`, booking_status);
               Swal.fire("Canceled", "", "success");
                fetchMyBookings();
            }catch(err){
                toast.error(err)
            }
         
        } 
        
      });






  };
  return (
    <div>
      <h1 className="text-center font-bold text-2xl md:text-3xl">
        MY BOOKINGS
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-compact striped-columns">
          {/* head */}
          <thead>
            <tr className="bg-gray-400 text-gray-700 text-shadow-sm *:text-xl ">
              <th>Car Image</th>
              <th>Car Model:</th>
              <th>Booking Date</th>
              <th>Total Price: </th>
              <th>Booking Status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, idx) => (
              <MyBookingTable
                idx={idx}
                key={booking._id}
                booking={booking}
                handleUpdateDate={handleUpdateDate}
                handleCancelBooking={handleCancelBooking}
              />
            ))}
          </tbody>
        </table>
      </div>


{/* Chart */}

<h2 className="text-center text-2xl font-bold m-4">
        Daily Rental Prices by Car Model
      </h2>

      <CarChart data={bookings}/>

      {/* MODAL */}
      <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <h1 className="text-center font-bold text-xl">Modify Booking Date</h1>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">start</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                value={startDate}
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
          <div className="modal-action justify-evenly">
            <form method="dialog" className="flex justify-center gap-4">
              <button
                onClick={() => handleUpdateDateToDb(modalBooking?._id)}
                className="btn w-full bg-amber-200 "
              >
                Confirm
              </button>
              <button className="btn w-full bg-amber-200">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyBooking;
