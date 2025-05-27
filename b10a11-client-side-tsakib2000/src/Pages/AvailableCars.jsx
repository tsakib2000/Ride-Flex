/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { CiCircleList, CiGrid41, CiSearch } from "react-icons/ci";
import AvailableCarCard from "../Components/AvailableCarCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import LoadingSpinner from "../Components/LoadingSpinner";

const AvailableCars = () => {
  const axiosSecure = useAxiosSecure();

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchAvailableCars();
  }, [search, sort]);

  const fetchAvailableCars = async () => {
    setLoading(true)
    try {
      const { data } = await axiosSecure(`/all-cars?availability=Available&search=${search}&sort=${sort}`);
      setCars(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false)
    }
  };
  const handleSortByPrice = (order) => {

    const newCars = [...cars].sort((a, b) => {
      {
        const priceA = parseInt(a.dailyRentalPrice)
        const priceB = parseInt(b.dailyRentalPrice)
        return order === "asc" ? priceA - priceB : priceB - priceA;
      }
    });
    setCars(newCars)


  }

  return (
    <div>
      <h1 className="text-center my-4 text-2xl md:text-3xl font-bold">Available Rides</h1>
      <div className=" grid grid-cols-12 gap-3">

        <div className=" col-span-3 w-full">
          <select
            onChange={(e) => handleSortByPrice(e.target.value)}
            name="category"
            id="category"
            className="border p-4 rounded-lg w-full"

          >
            <option value="">Sort by Price</option>
            <option value="asc">Lowest First</option>
            <option value="dsc"> Highest First</option>
          </select>
        </div>

        <div className="col-span-3 w-full">
          <select
            onChange={(e) => setSort(e.target.value)}
            name="category"
            id="category"
            className="border p-4 rounded-lg w-full"

          >
            <option value="">Sort by Date</option>
            <option value="asc">Oldest First  </option>
            <option value="dsc">Newest First </option>
          </select>
        </div>

        <div className="col-span-6 flex justify-center items-center  p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            onChange={e => setSearch(e.target.value)}
            className="px-6 py-2  text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            value={search}
            placeholder="Enter Your Car Model"
          />
          <CiSearch className="font-bold text-xl" />
        </div>

      </div>

      {
        loading ? <LoadingSpinner /> : <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 'w-3/5  mx-auto'`}>
          {cars?.map(car => <AvailableCarCard key={car._id} car={car} />)}
        </div>
      }


    </div>
  );
};

export default AvailableCars;
