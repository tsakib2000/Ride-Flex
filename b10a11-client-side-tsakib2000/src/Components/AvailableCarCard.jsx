/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";

const AvailableCarCard = ({car}) => {
    const {_id,carModel,dailyRentalPrice,availability,photo,datePosted,bookingCount
    }=car || {}

    return (
 
      <div className="bg-white rounded-lg shadow-md overflow-hidden my-3">
      <div className="relative">
        <img
          src={photo}
          alt="BMW M5"
          className="w-full h-48 object-cover"
        />
  

      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{carModel}</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-amber-500 font-bold">Rent: ${dailyRentalPrice}/day</span>
          <span className="text-sm bg-green-300 px-4 rounded-3xl">{availability}</span>
          
        </div>
        <div className="flex justify-between space-x-4 text-gray-600">
      
   <span>Date :{format(new Date(datePosted),'dd/MM/yyyy')}</span>
   <span>Total Booking: {bookingCount}</span>
        <Link to={`/carDetails/${_id}`} className="btn btn-xs bg-amber-300 ">Book Now</Link>
        </div>
      </div>
    </div>
    );
};

export default AvailableCarCard;