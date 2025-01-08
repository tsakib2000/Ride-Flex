/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";
import loadingSpinner from '../assets/loading.json'

const PrivateRoute = ({children}) => {
    const {pathname}=useLocation();
    const {user,loading}=useAuth();
    if(loading) return <div className=" flex justify-center items-center"><Lottie animationData={loadingSpinner}></Lottie></div>
    if(user) return children

    return <Navigate state={pathname} to='/login'></Navigate>;
};

export default PrivateRoute;