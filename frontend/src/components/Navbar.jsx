import React, { useContext } from "react";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);

  const handleLogout = (e) => {
    logout();
  };
  return (
    <div className="">
      <div className="bg-white h-20 w-full flex justify-between items-center">
        <Link to="/">
        {user && (
          <h1
            className="p-5 text-2xl font-bold uppercase tracking-widest"
            style={{ fontFamily: "Aleo, sans-serif" }}
          >
            {user.user.businessName}
          </h1>
        )}
        </Link>
        <div className="flex items-center gap-2">
          <button
            className="border-2 bg-red-500 text-white rounded-2xl px-5 py-2 me-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="w-full flex text-center">
        <Link
          className="w-full text-2xl py-3 shadow-lg  bg-blue-700 text-white hover:bg-blue-800 border rounded-xl "
          to="/add-food"
        >
          <div>
            {user && user.user.category === 'restaurant' && <h1>Food Items</h1>}
            {user && user.user.category === 'hotels' && <h1>Hotel Offers</h1>}
          </div>
        </Link>
        <Link
          className="w-full text-2xl py-3 shadow-lg  bg-blue-700 text-white hover:bg-blue-800 border rounded-xl "
          to="/food-availability"
        >
          <div>
          {user && user.user.category === 'restaurant' && <h1>Food Availabilty</h1>}
          {user && user.user.category === 'hotels' && <h1>Rooms Availability</h1>}
          </div>
        </Link>
        <Link
          to="/vacant-time"
          className="w-full border text-2xl py-3 shadow-lg  bg-blue-700 text-white hover:bg-blue-800 rounded-xl"
        >
          <div>
            <h1>Vacant Time</h1>
          </div>
        </Link>
        <Link
          to="/profile"
          className="w-full border text-2xl py-3 shadow-lg  bg-blue-700 text-white hover:bg-blue-800 rounded-xl"
        >
          <div>
            <h1>Business Details</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
