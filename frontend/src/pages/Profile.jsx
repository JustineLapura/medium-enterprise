import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const userData = user.user;
  console.log(userData);
  return (
    <div
      style={{ fontFamily: "Aleo, sans-serif" }}
      className="w-full min-h-screen  bg-white"
    >
      <Navbar />
      <div className="w-full h-full max-w-[1200px] py-4  mx-auto">
        <div className="w-full h-full  flex justify-between items-center ">
          <div className="space-y-2">
            <p className="text-gray-800 text-lg">
              Restaurant's Name:{" "}
              <span className="font-semibold text-xl ml-3 text-gray-900 border-b border-gray-900">
                {userData.businessName}
              </span>
            </p>
            <p className="text-gray-800 text-lg">
              Business Number:{" "}
              <span className="font-semibold text-xl ml-3 text-gray-900 border-b border-gray-900">
                {userData.businessNumber}
              </span>
            </p>
            <p className="text-gray-800 text-lg">
              Address:{" "}
              <span className="font-semibold text-xl ml-3 text-gray-900 border-b border-gray-900">
                {userData.address}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center border-2 w-24 h-20 bg-gray-200 border-black my-4">
              <FaPlus className=" text-6xl text-gray-900" />
            </div>
            <p className="text-xl">Upload Cover image:</p>
          </div>
        </div>
        <div className="w-full relative">
          <p className="text-gray-800 text-lg my-4 ">About Restaurant: </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            className="w-[85%] rounded-xl p-3 text-xl bg-gray-200"
          ></textarea>
          <FaEdit className="absolute bottom-0 right-5" size={80} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
