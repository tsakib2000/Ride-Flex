

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {

  const { profileImage, rating, reviewText, userName } = review || {};

  return (
    <div className="card bg-base-100 shadow-md p-10 h-[258px] rounded-lg border">
      <div className="flex flex-col justify-between items-center text-center">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, index) => (
            <div className="rating" key={index}>
              <input

                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
            </div>
          ))}
        </div>

        <p className="text-gray-700 mb-4">{reviewText}</p>

        <div className="flex items-center gap-4 hidden md:block">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h5 className="font-medium">{userName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
