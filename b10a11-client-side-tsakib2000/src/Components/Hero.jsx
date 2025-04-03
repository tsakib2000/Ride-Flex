import { Link } from 'react-router-dom';
import HeroIMG from '../assets/hero.jpg'

const Hero = () => {
    return (
        <div
        className="hero h-[600px]  bg-cover mb-8"
        style={{
          backgroundImage:`url(${HeroIMG})`,
          
        }}>
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-white text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Discover Freedom on Four Wheels</h1>
            <p className="mb-5">
            Unleash the joy of exploration with our premium car rental service. Whether you&apos;re planning a weekend getaway, a business trip, or a cross-country adventure, we provide the perfect ride for every journey. 
            </p>
            <Link to='/available-cars' className="btn bg-amber-400 text-white border-none">Start Your Journey</Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;