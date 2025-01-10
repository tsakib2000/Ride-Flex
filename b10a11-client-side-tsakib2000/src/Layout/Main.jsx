import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <>
      <div className="h-[103px] bg-amber-200 flex justify-center items-center">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
