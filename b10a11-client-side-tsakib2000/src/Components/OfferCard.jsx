/* eslint-disable react/prop-types */



const OfferCard = ({title,offer,desc}) => {
 
    return (
        <div className=" flex flex-col rounded-xl border border-amber-200 p-7 *:text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="font-bold text-3xl">{title}</h1>
            <h3> {offer}</h3>
            <p>{desc}</p>
           <div className="flex justify-end flex-grow items-center "> <button className="btn bg-amber-300 text-[#3A1A03]">Book Now</button></div>
        </div>
    );
};

export default OfferCard;