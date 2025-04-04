/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ReviewCard from "./ReviewCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Aos from "aos";

const UserReview = () => {
  const axiosSecure=useAxiosSecure();
    const[reviews,setReviews]=useState([])
useEffect(()=>{
    fetchAllReview();
    Aos.init();
},[])
    const fetchAllReview=async()=>{
        const {data}=await axiosSecure.get('/reviews')
        setReviews(data)
    }
   
    return (
        <div data-aos="zoom-in-up " className="mb-8">
            <h1 className="text-center font-bold text-2xl md:text-4xl mb-5">Hear from Our Happy Customers</h1>
            <Swiper

   slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            reviews?.map((review)=><SwiperSlide     key={review._id}><ReviewCard review={review}/></SwiperSlide>)
        }

      </Swiper>
        </div>
    );
};

export default UserReview;