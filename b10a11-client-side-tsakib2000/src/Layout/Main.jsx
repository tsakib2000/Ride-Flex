import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import car from '../assets/car.png'

const Main = () => {
  const {pathname}=useLocation();
  
  return (
    <>
      <div className="h-[80px] bg-amber-200 flex justify-center items-center">
        <Navbar />
      </div>
    {
      pathname == '/' &&   <Hero/>
    }
      <div className="w-11/12 mx-auto min-h-[calc(100vh-392px)] ">
        <Outlet />
        <img src={car} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Main;
