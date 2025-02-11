import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";


const Main = () => {
  const {pathname}=useLocation();
  
  return (
    <>
      <div className="h-[103px] bg-amber-200 flex justify-center items-center">
        <Navbar />
      </div>
    {
      pathname == '/' &&   <Hero/>
    }
      <div className="w-11/12 mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
