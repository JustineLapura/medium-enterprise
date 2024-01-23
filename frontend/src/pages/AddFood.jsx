import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { FaEdit } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HotelAddRoom from "../components/HotelAddRoom";
import ResAddFood from "../components/ResAddFood";

const AddFood = () => {
  const { user } = useContext(AuthContext);


  const navigate = useNavigate();

  console.log(user);
  console.log("User: ", user.user.category);
  console.log(user.user.category === "hotels");

  return (
    <div className=" w-full h-full bg-blue-300">
      <div className="fixed w-full">
        <Navbar />
      </div>
      {user && user.user.category === "hotels" && <HotelAddRoom />}
      {user && user.user.category === "restaurant" && <ResAddFood />}
    </div>
  );
};

export default AddFood;
