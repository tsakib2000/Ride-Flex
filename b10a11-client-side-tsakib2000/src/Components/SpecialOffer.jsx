import Aos from "aos";
import "aos/dist/aos.css";
import OfferCard from "./OfferCard";
import { useEffect } from "react";

const SpecialOffer = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div data-aos="fade-down">
      {/* <motion.div layoutId="modal" /> */}
        <h1 className="animate-pulse font-bold text-center text-2xl md:text-4xl my-5">Exclusive Special Offers</h1>
        < div  data-aos="zoom-in-up"  className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
      <OfferCard
        title={"Drive Into Savings"}
        offer={"15% Off Weekend Rentals!"}
        desc={'Perfect for weekend deals to attract more short-term customers.'}
      />
      <OfferCard
        title={"Holiday Special"}
        offer={"Luxury Cars Starting at Just $99/Day!"}
        desc={'Great for targeting holiday travelers or special occasions.'}
      />
      <OfferCard
        title={"Flash Deal"}
        offer={" 20% Off All SUVs - Today Only!"}
        desc={'Ideal for creating urgency and promoting specific car categories.'}
      />
    
      <OfferCard
        title={"Exclusive Offer"}
        offer={"  Rent for 3 Days, Pay for 2"}
        desc={'Encourages longer rentals with a cost-effective deal.'}
      />
    
    </div>
    </div>
  );
};

export default SpecialOffer;
