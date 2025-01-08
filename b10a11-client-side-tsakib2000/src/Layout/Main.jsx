import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="h-[103px] ">
            <Navbar/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;