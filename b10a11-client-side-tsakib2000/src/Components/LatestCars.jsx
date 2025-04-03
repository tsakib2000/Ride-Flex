/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import LatestCarCard from "./LatestCarCard";

const LatestCars = () => {
  const axiosSecure =useAxiosSecure();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetchLatestCars();
  }, [cars]);
  const fetchLatestCars = async () => {
    const { data } = await axiosSecure.get(`/latestCars`);
    setCars(data);
  };
 
  return (
    <div className="mb-8">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-5">
        Find Your Perfect Ride
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        cars?.map(car=><LatestCarCard key={car._id} car={car}/>)
      }
      </div>
    </div>
  );
};

export default LatestCars;
