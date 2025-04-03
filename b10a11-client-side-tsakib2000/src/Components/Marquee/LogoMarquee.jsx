import AudiLogo from '../../assets/CarLogos/AudiLogo.png'
import CitroenLogo from '../../assets/CarLogos/CitroenLogo.png'
import DaciaLogo from '../../assets/CarLogos/DaciaLogo.png'
import HuyndaiLogo from '../../assets/CarLogos/HuyndaiLogo.png'
import JeepLogo from '../../assets/CarLogos/JeepLogo.png'
import LandRover from '../../assets/CarLogos/LandRoverLogo.png'
import MBLogo from '../../assets/CarLogos/MBLogo.png'
import OpelLogo from '../../assets/CarLogos/OpelLogo.png'
import RenaultLogo from '../../assets/CarLogos/RenaultLogo.png'
import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
    return (
        <div className='max-w-[900px] mx-auto mb-5'>
            <Marquee pauseOnHover="true"  direction="" >
            <div className='w-full flex justify-evenly items-center gap-10'>
                <img src={AudiLogo} alt="" />
                <img src={CitroenLogo} alt="" />
                <img src={DaciaLogo} alt="" />
                <img src={HuyndaiLogo} alt="" />
                <img className='h-9' src={JeepLogo} alt="" />
                <img src={LandRover} alt="" />
                <img src={MBLogo} alt="" />
                <img src={OpelLogo} alt="" />
                <img src={RenaultLogo} alt="" />
                
            </div>

            </Marquee>

        </div>
    );
};

export default LogoMarquee;