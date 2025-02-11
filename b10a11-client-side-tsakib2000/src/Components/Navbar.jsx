import { Link, NavLink } from "react-router-dom";
import CarLogo from "../assets/icons8-car-rental-glyph-32.png";
import useAuth from "../Hooks/useAuth";
const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const navbarLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available-cars">Available Cars</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-car">Add Car </NavLink>
          </li>
          <li>
            <NavLink to="/my-cars">My Cars</NavLink>
          </li>
          <li>
            <NavLink to="/my-booking">Bookings </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="z-10 top-0 navbar bg-transparent backdrop-blur-2xl fixed  pt-4  pb-8 mx-auto">
<div className="navbar w-11/12 mx-auto">
<div className="navbar-start">
        <Link className="btn btn-ghost text-xl border border-gray-400">
          <img src={CarLogo} alt="" />
          <span className="font-bold">RideFlex</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex border border-gray-400 rounded-xl">
        <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
          >
            {navbarLinks}
          </ul>
        </div>

        <div className="flex gap-4">
          {user ? (
    <>
            <button
              onClick={signOutUser}
              className="btn  rounded-3xl py-0  bg-amber-400 text-white font-bold border-none shadow-2xl"
            >
              log Out
            </button>
            
            <div title={user?.displayName} className='w-12 rounded-full '>
                <img
                referrerPolicy="no-referrer"
              className="ring rounded-full ring-amber-100"
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
          
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn rounded-3xl py-0 bg-amber-400 text-white font-bold border-none shadow-2xl"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn  rounded-3xl py-0  bg-amber-400 text-white font-bold border-none shadow-2xl"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
</div>
    </div>
  );
};

export default Navbar;
