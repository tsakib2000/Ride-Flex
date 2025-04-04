
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
           <div className="relative bg-blue-600 text-white p-6 max-w-sm rounded-xl shadow-lg"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
      }}
    >
      {/* Rounded Bottom-Right Corner */}
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-600 rounded-full"></div>

      {/* Quotation Mark */}
      <span className="absolute top-2 left-2 text-4xl text-amber-400 font-bold">
        ❝
      </span>

      {/* Testimonial Text */}
      <p className="text-lg mb-5">
        Impressive selection of vehicles and top-notch customer service! I&apos;ve
        rented from numerous car rental companies, but this one stands out.
      </p>

      {/* User Info Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/50"
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div>
          <h4 className="font-bold text-white">D. Devine</h4>
          <p className="text-sm text-gray-300">mycompany.co</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Home;