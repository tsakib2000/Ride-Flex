/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";

const LatestCarCard = ({ car }) => {
  const {
    _id,
    carModel,
    dailyRentalPrice,
    availability,
    bookingCount,
    photo,
    datePosted,
  } = car || {};

  return (
    <div className="card card-compact bg-base-100 h-[397px] shadow-xl flex scale-90 hover:scale-100 duration-300">
      <figure>
        <img className="w-full object-cover" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <div className="flex justify-between items-center">
          <h2 className="card-title">Model:{carModel}</h2>
          <span className="px-3 py-0 text-[10px] text-green-800 uppercase bg-green-200 rounded-full ">
            {availability}
          </span>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-base"> $ {dailyRentalPrice}/day</p>
            <p className="text-base">
              Date Posted:{format(new Date(datePosted), "dd/MM/yyyy")}
            </p>
            <p className="text-base">Booking Count:{bookingCount}</p>
          </div>
          <div>
            <Link to={`/carDetails/${_id}`} className="btn btn-sm btn-outline">bookNow</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCarCard;
