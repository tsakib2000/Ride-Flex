/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { CiCircleList, CiGrid41 } from "react-icons/ci";
import AvailableCarCard from "../Components/AvailableCarCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AvailableCars = () => {
  const axiosSecure=useAxiosSecure();
  const [isGridView, setIsGridView] = useState(true);
  const [search,setSearch]=useState('')
  const [sort,setSort]=useState('')
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetchAvailableCars();
  }, [search,sort]);

  const fetchAvailableCars = async () => {
    try {
      const { data } = await axiosSecure(`/all-cars?availability=Available&search=${search}&sort=${sort}`);
      setCars(data);
    } catch (err) {
      console.log(err.message);
    }
  };
const handleSortByPrice=(order)=>{
  
 const newCars = [...cars].sort((a,b)=>{{
    const priceA = parseInt(a.dailyRentalPrice) 
    const priceB= parseInt(b.dailyRentalPrice)
   return order === "asc" ? priceA - priceB : priceB - priceA;}});
 setCars(newCars)


}

  return (
    <div>
      <h1 className="text-center my-4 text-2xl md:text-3xl font-bold">Available Rides</h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 ">

        <div>
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

        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
             onChange={e=>setSearch(e.target.value)}
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            value={search}
            placeholder="Enter Your Car Model"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>

        {/* Grid and list Toggle button */}

        <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
          <button
            onClick={() => setIsGridView(true)}
            className={`${
              isGridView && "active"
            } inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2" `}
          >
            <CiGrid41 />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`${isGridView || "active"} inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2`}
          
          >
            <CiCircleList />
            <span>List</span>
          </button>
        </div>
      </div>

<div className={`${isGridView && 'grid'} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${isGridView || 'w-3/5 lg:w-[518px] mx-auto'}`}>
{cars?.map(car=> <AvailableCarCard key={car._id} car={car}/>)}
</div>
     
    </div>
  );
};

export default AvailableCars;
