import { Link, NavLink } from "react-router-dom";
import CarLogo from "../assets/icons8-car-rental-glyph-32.png";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {

    setTheme(theme === 'dark' ? 'light' : 'dark');

  };
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
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
      <li>
        <NavLink to="/faq">Faq</NavLink>
      </li>
    </>
  );
  return (<>
    <div className="z-10 top-0 navbar bg-amber-200  fixed  mx-auto flex flex-col h-[90px] md:h-[80px] md:flex-row">
      <div className="flex justify-evenly w-11/12 mx-auto">
        <div className="navbar ">
          <div className="navbar-start flex items-center justify-start">
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
                className="bg-amber-50 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                {navbarLinks}
              </ul>
            </div>
            <Link className="flex flex-col md:flex-row items-center gap-2 text-xl">
              <img src={CarLogo} alt="" />
              <span className="font-semibold md:font-bold text-black">RideFlex</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 flex gap-1">{navbarLinks}</ul>
          </div>
          <div className="navbar-end">


            <div className="flex gap-4">
              {user ? (
                <>
                  <button
                    onClick={signOutUser}
                    className="btn  rounded-3xl py-0  bg-amber-400  font-bold border-none shadow-2xl"
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
                    className="btn rounded-3xl py-0 bg-amber-400  font-bold border-none shadow-2xl"
                  >
                    Login
                  </Link>

                </>
              )}
            </div>


          </div>

        </div>
        <div className=''>
          <label className="flex cursor-pointer gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onClick={toggleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>

  </>
  );
};

export default Navbar;
