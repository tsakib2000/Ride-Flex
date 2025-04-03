
import LatestCars from "../Components/LatestCars";
import LogoMarquee from "../Components/Marquee/LogoMarquee";
import SpecialOffer from "../Components/SpecialOffer";
import UserReview from "../Components/UserReview";
import WhyChooseUs from "../Components/WhyChooseUs";


const Home = () => {
    return (
        <div className="my-5">
           <h1 className="text-3xl md:text-5xl font-bold text-center"></h1> 
         <LogoMarquee/>
           <WhyChooseUs/>
           <LatestCars/>
           <UserReview/>
           <SpecialOffer/>
        </div>
    );
};

export default Home;