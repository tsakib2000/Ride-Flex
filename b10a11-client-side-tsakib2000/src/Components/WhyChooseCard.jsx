/* eslint-disable react/prop-types */

const WhyChooseCard = ({icon,title,desc}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2  rounded-lg shadow-lg p-8 ">
      
<h1  className="font-bold text-5xl text-amber-500" >{icon}</h1>
      <h1 className="font-bold text-2xl text-center">{title}</h1>
      <p className="text-base text-gray-400 text-center">
        {desc}
      </p>
    </div>
  );
};

export default WhyChooseCard;
