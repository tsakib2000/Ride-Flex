import { Link } from 'react-router-dom';
import HeroIMG from '../assets/car.png'


const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-white to-amber-200'>
      <div
        className="flex justify-around items-center h-[600px]  mx-10  
         mb-8">

        <div className="lg:pl-4 max-w-md">
          <h1 className=" mb-5 md:text-5xl lg:text-7xl font-bold">Discover Freedom on Four <span className='text-amber-500'> Wheels</span></h1>
          <p className="mb-5 lg:text-lg">
            Unleash the joy of exploration with our premium car rental service. Whether you&apos;re planning a weekend getaway, a business trip, or a cross-country adventure, we provide the perfect ride for every journey.
          </p>
          <Link to='/available-cars' className="btn bg-amber-400 text-white border-none">Start Your Journey</Link>
        </div>
        <div>
          <img src={HeroIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;