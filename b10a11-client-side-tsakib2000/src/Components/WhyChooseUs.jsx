import { FaCarSide } from "react-icons/fa";
import WhyChooseCard from "./WhyChooseCard";
import { FaSackDollar } from "react-icons/fa6";
import { CiBookmarkCheck, CiClock2 } from "react-icons/ci";

const WhyChooseUs = () => {
  return (
    <div className="my-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4"> Why Choose Us for Your Next Ride?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <WhyChooseCard
          icon={<FaCarSide />}
          title={"Wide Variety of Cars"}
          desc={"Explore our extensive fleet, from budget cars to luxury rides tailored to your needs."}
        />
        <WhyChooseCard
          icon={<FaSackDollar />}
          title={"Affordable Prices"}
          desc={"Enjoy competitive rates with no hidden charges, ensuring affordability for every journey."}
        />
        <WhyChooseCard
          icon={<CiBookmarkCheck />}
          title={"Easy Booking Process"}
          desc={"Reserve your car hassle-free in just a few clicks with our seamless online booking platform"}
        />
        <WhyChooseCard
          icon={<CiClock2 />}
          title={"Customer Support"}
          desc={"We're here for you, 24/7, to answer your questions and provide assistance anytime, anywhere."}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
