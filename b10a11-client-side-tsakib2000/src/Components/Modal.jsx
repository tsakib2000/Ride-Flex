import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const Modal = ({ modalCar, fetchMyCar }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    photo,
    carModel,
    dailyRentalPrice,
    availability,
    location,
    features,
    description,
    vehicleRegistrationNumber,
    bookingCount,
    datePosted,
    owner,
    userName,
  } = modalCar || {};
  const handleUpdateData = async (e) => {
    const formData = new FormData(e.target);
    const carData = Object.fromEntries(formData.entries());
    const { features, ...newCarData } = carData;
    newCarData.features = [...features.split(",")];
    newCarData.owner = owner;
    newCarData.userName = userName;
    newCarData.datePosted = datePosted;
    newCarData.bookingCount = bookingCount;
    try {
      await axiosSecure.put(`/update-car/${_id}`, newCarData);
      toast.success("Car info updated successfully");
      fetchMyCar();
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      {/* modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl ">
          <h3 className="font-bold text-xl text-center ">Edit Your car Info</h3>
          <div className="modal-action">
            <form
              onSubmit={handleUpdateData}
              method="dialog"
              className="w-full space-y-8"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Car Model</span>
                </label>
                <input
                  defaultValue={carModel}
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
                  defaultValue={dailyRentalPrice}
                  type="number"
                  name="dailyRentalPrice"
                  className="input input-bordered w-full"
                  placeholder="Enter rental price"
                />
              </div>
              <div className="space-y-1">
                <p> Availability</p>
                <select
                  name="availability"
                  id="category"
                  className="border p-4 rounded-lg"
                  defaultValue={availability || "Available"}
                >
                  <option value="">Availability </option>
                  <option value="Available">Available </option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Vehicle Registration Number
                  </span>
                </label>
                <input
                  defaultValue={vehicleRegistrationNumber}
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
                  defaultValue={features?.map((f) => f)}
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
                  defaultValue={description}
                  name="description"
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter description"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                  placeholder="Enter Photo Url"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  defaultValue={location}
                  type="text"
                  name="location"
                  className="input input-bordered w-full"
                  placeholder="Enter location"
                />
              </div>
              <button className="btn w-full">Update</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
