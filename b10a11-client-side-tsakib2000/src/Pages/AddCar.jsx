
import useAuth from "../Hooks/useAuth";

import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddCar = () => {
  const axiosSecure=useAxiosSecure();
  const {user}=useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
const {features,...newData}=data;
newData.userName=user?.displayName
newData.owner=user?.email;
newData.features=[...features.split(',')]
newData.availability='Available';
newData.bookingCount=0;
newData.datePosted=new Date();

try{
  await  axiosSecure.post('/add-car',newData)
  Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Car Added Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    e.target.reset()

}catch(err)
{
    toast.error(err.message)
}

  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Add your car</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Car Model</span>
          </label>
          <input
            type="text"
            name="carModel"
            className="input input-bordered w-full"
            placeholder="Enter car model"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Daily Rental Price</span>
          </label>
          <input
            type="number"
            name="dailyRentalPrice"
            className="input input-bordered w-full"
            placeholder="Enter rental price"
          />
        </div>

  

        <div className="form-control">
          <label className="label">
            <span className="label-text">Vehicle Registration Number</span>
          </label>
          <input
            type="text"
            name="vehicleRegistrationNumber"
            className="input input-bordered w-full"
            placeholder="Enter registration number"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Features</span>
          </label>
          <input
            type="text"
            name="features"
            className="input input-bordered w-full"
            placeholder="e.g., GPS, AC"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            placeholder="Enter location"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
      
            className="input input-bordered w-full"
            placeholder="Enter Photo Url"
          />
        </div>


        <div className="form-control mt-4">
          <button type="submit" className="btn bg-amber-300 font-bold w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
