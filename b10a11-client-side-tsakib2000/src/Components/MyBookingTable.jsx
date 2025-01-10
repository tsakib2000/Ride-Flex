/* eslint-disable react/prop-types */
import { differenceInDays, format } from "date-fns";

import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const MyBookingTable = ({ booking,handleUpdateDate,handleCancelBooking ,idx}) => {
   
  const { _id,photo, carModel, dailyRentalPrice,startDate, endDate ,booking_status} = booking || {};
const totalBookingDays = differenceInDays(endDate,startDate)

  return (
    <tr className={`hover h-28 ${idx % 2 === 0 ? "bg-gray-200" : "bg-white"} `}>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="h-24 md:h-32 w-60">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={photo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl md:text-3xl"></div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold text-xl md:text-3xl">{carModel}</div>
        </div>
      </td>
      <td className="*:font-bold *:text-base ">
        <p className="mb-2">
          Start: {format(new Date(startDate), "dd-MM-yyyy HH:mm")}{" "}
        </p>
        <p>End : {format(new Date(endDate), "dd-MM-yyyy HH:mm")}</p>
      </td>
      <td className="text-base font-bold">${totalBookingDays*dailyRentalPrice}</td>
      <td><span  className={`
        ${booking_status === 'confirmed' && 'bg-green-100 border border-green-300'}
        ${booking_status === 'canceled' && 'bg-red-100 border border-red-300 '}
          text-center  p-1  rounded-xl  `}>{booking_status}</span></td>
      <td className=" flex flex-col justify-center items-center  gap-4 ">
        <button
            onClick={()=>handleUpdateDate(_id)}
          className={`${booking_status === 'canceled' && 'cursor-not-allowed'} w-full bg-blue-500 text-white p-2 rounded-lg space-x-4 flex flex-col justify-center items-center  `}
        >
          <span><FaCalendarAlt /></span>
          Modify Date
        </button>
        <button
            onClick={() =>handleCancelBooking(_id)}
          className={`${booking_status === 'canceled' && 'cursor-not-allowed'} w-full  bg-red-500 p-2 rounded-lg  text-center text-white  flex flex-col justify-center items-center `}
        >
          <MdOutlineDeleteOutline />
          cancel
        </button>
      </td>
      <th></th>
    </tr>
  );
};

export default MyBookingTable;
