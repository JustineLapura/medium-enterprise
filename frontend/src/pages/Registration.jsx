import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useSignup } from "../hooks/useSignup";

const Registration = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [category, setCategory] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(
      businessName,
      email,
      password,
      businessNumber,
      category,
      address
    );
  };

  return (
    <div className="w-full h-full bg-gray-300">
      <div className="fixed h-20 w-full flex justify-between items-center">
        <div className="" />
        <div className="me-6 space-x-4">
          <Link to="/login" className="font-semibold text-gray-500">
            Login
          </Link>
          <Link to="/register" className="font-semibold text-gray-900">
            Sign up
          </Link>
        </div>
      </div>
      <div className="w-full min-h-screen max-w-[1000px] mx-auto  flex flex-col justify-center items-center">
        <div className="w-full h-full flex items-center justify-between">
          <div className="">
            <h1 className="text-5xl font-bold">
              Create <br /> New Account
            </h1>
            <p className="text-xl font-semibold mt-2">
              Already Registered? Sign up
            </p>
            <div className="mt-6 ml-4 w-20 h-1 rounded-full bg-gray-950" />
            <p className="mt-4 text-gray-500">
              To Help you Build your Business for greatness.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold ">Registration</h1>
            <div className="flex justify-center items-center border-2 w-24 h-20 bg-white border-black my-4">
              <FaPlus className=" text-6xl text-orange-500" />
            </div>
            <p className="text-xl">Upload image:</p>
            <p className="mt-3 text-gray-500">
              Upload Bysiness Permit if you owned one. To confirm if certified
            </p>
          </div>
        </div>
        {/* Registration Input  */}
        <div className="w-full flex gap-4 items-center">
          {/* left  */}
          <div className="w-full space-y-2">
            <div className="w-full flex flex-col">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Business Number:
              </label>
              <input
                type="number"
                placeholder="09238735678"
                className="w-3/4 bg-white px-3 py-2 rounded-full"
                onChange={(e) => setBusinessNumber(e.target.value)}
                value={businessNumber}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Category of Business:
              </label>
              <select
                name=""
                id=""
                className="w-3/4 bg-white px-3 py-2 rounded-full border-none pe-3"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Select</option>
                <option value="hotels">Hotels</option>
                <option value="restaurant">Restaurant</option>
                <option value="transportation">Transportation</option>
              </select>
            </div>
            <div className="w-full flex flex-col ">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Zip Code:
              </label>
              <input
                type="number"
                placeholder="6700"
                className="w-1/2 bg-white px-3 py-2 rounded-full"
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Address:
              </label>
              <input
                type="text"
                placeholder="City Hall, Rizal Ave. Ext., Catbalogan City "
                className="w-full bg-white px-3 py-2 rounded-full"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
          </div>
          {/* right  */}
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="w-full flex flex-col">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Business Name:
              </label>
              <input
                type="text"
                placeholder="Sample Restaurant"
                className="w-full bg-white px-3 py-2 rounded-full"
                onChange={(e) => setBusinessName(e.target.value)}
                value={businessName}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Email:
              </label>
              <input
                type="text"
                placeholder="restaurant@gmail.com"
                className="w-full bg-white px-3 py-2 rounded-full"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="ml-3 mb-1 font-semibold text-gray-900">
                Password:
              </label>
              <input
                type="password"
                placeholder="s@mpleP@ssword"
                className="w-full bg-white px-3 py-2 rounded-full"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSubmit}
                className="px-8 py-1 mx-auto rounded-full bg-orange-400 text-white"
              >
                Sign Up
              </button>
            </div>
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
