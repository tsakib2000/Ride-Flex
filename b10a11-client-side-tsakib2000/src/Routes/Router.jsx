import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Error from './../Pages/Error';
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddCar from "../Pages/AddCar";
import AvailableCars from "../Pages/AvailableCars";
import CarDetails from "../Pages/CarDetails";
import MyCar from "../Pages/MyCar";
import MyBooking from "../Pages/MyBooking";

import Faq from "../Pages/Faq";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/add-car',
                element:<PrivateRoute><AddCar/></PrivateRoute>
            },{
                path:'/available-cars',
                element:<AvailableCars/>
            },
            {
                path:'/carDetails/:id',
                element:<CarDetails/>
            },
            {
                path:'/my-cars',
                element:<PrivateRoute><MyCar/></PrivateRoute>

            },
            {
                path:'/my-booking',
                element:<PrivateRoute><MyBooking/></PrivateRoute>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])

export default router