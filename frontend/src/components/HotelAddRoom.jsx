import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaEdit } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const HotelAddRoom = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const addRoom = async (req, res) => {
    setError(null);

    const response = await fetch("http://localhost:4000/api/room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        service,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      enqueueSnackbar("Failed to add", { variant: "error" });
    }

    if (response.ok) {
      enqueueSnackbar("Successfully added", { variant: "success" });
      setName("");
      setCategory("");
      setError(null);
      navigate("/");
    }
  };

  return (
    <div className=" w-full h-full bg-blue-300">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="w-full min-h-screen max-w-[1200px] mx-auto flex pt-40 gap-8">
        <div className="w-3/5 space-y-4">
          {/* top  */}
          <div className="h-[300px] w-full p-5 text-gray-600 bg-white rounded-2xl">
            <p className="text-xl ">Hotel Total: </p>
            <p className="text-xl">Name: </p>
            <p className="text-xl">Service: </p>
            <div className="w-full flex items-center ">
              <div className="w-full mt-6">
                {/* left  */}
                <p className="w-full py-1 my-1 ">Sizes: </p>
                <p className="ms-10">Solo :</p>
                <p className="ms-10">Double :</p>
                <p className="ms-10">King Size: </p>
              </div>
              {/* right  */}
              <div className="w-full mt-7">
                {/* left  */}
                <p className="w-full py-1">Prices: </p>
                <input
                  type="text"
                  className="w-20 border-b border-black ps-2 focus:outline-none"
                />
                <br />
                <input
                  type="text"
                  className="w-20 border-b border-black ps-2 focus:outline-none"
                />
                <br />
                <input
                  type="text"
                  className="w-20 border-b border-black ps-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* bottom  */}
          <div className="h-[130px] w-full flex flex-col p-4 gap-2 bg-white rounded-2xl">
            <p className="text-xl">Hotel Offers:</p>
            <input
              type="text"
              placeholder="Enter room here"
              className="w-full h-12 ps-2 text-xl bg-gray-200"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
        {/* Right  */}
        <div className="relative w-2/5 h-[432px] p-4 bg-white rounded-2xl">
          <p>Type of Bed:</p>
          <div className="flex justify-around">
            <div className="">
              <input className="" type="checkbox" />
              <span className="ms-2">Solo</span>
            </div>

            <div className="">
              <input className="" type="checkbox" />
              <span className="ms-2">Double</span>
            </div>

            <div className="">
              <input className="" type="checkbox" />
              <span className="ms-2">King Size</span>
            </div>
          </div>
          <button className="w-full bg-blue-900 rounded text-white font-semibold my-2">
            + Add
          </button>
          <div className="w-full flex gap-10">
            {/* left  */}
            <div className="w-full ">
              <div className="">
                <input
                  className="ms-3"
                  type="checkbox"
                  onChange={() => setService("meal")}
                />
                <span className="ms-2">Meal</span>
              </div>

              <div className="">
                <input
                  className="ms-3"
                  type="checkbox"
                  onChange={() => setService("snacks")}
                />
                <span className="ms-2">snacks</span>
              </div>

              <div className="">
                <input
                  className="ms-3"
                  type="checkbox"
                  onChange={() => setService("dessert")}
                />
                <span className="ms-2">Snacks</span>
              </div>
            </div>
            {/* right  */}
            <div className="w-full">
              <div className="">
                <input
                  type="checkbox"
                  onChange={() => setService("cleaning")}
                />
                <span className="ms-2">Cleaning</span>
              </div>

              <div className="">
                <input type="checkbox" onChange={() => setService("laundry")} />
                <span className="ms-2">Laundry</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-900 rounded text-white font-semibold my-2">
            + Add
          </button>

          <img
            className="w-[150px] rounded-lg"
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="text-gray-700">Room Image:</p>
          <IoIosSend
            className="absolute bottom-7 right-10 cursor-pointer hover:scale-125 duration-200"
            size={60}
            onClick={addRoom}
          />
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default HotelAddRoom;
