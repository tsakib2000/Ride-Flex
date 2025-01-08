import axios from "axios";
import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";



export const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
})


 const useAxiosSecure=()=>{
    const {signOutUser}=useAuth();

    const navigate=useNavigate()
useEffect(()=>{
    axiosSecure.interceptors.response.use(res =>{
        return res
    },async error=>{
        console.log('error caught from our axios interceptor',  error.response);
    
        if(error.response.status === 401 || error.response.status === 403){

            signOutUser();
            navigate('/login')
        }
      
    })
},[signOutUser,navigate])
return axiosSecure
}

export default useAxiosSecure;