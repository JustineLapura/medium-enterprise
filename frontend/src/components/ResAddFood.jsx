import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaEdit } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const ResAddFood = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  console.log(name, category);

  const addFood = async (req, res) => {
    setError(null);

    const response = await fetch("http://localhost:4000/api/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        category,
        price
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
      navigate("/food-availability");
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
          <div className="h-[260px] w-full p-5 text-gray-600 bg-white rounded-2xl">
            <p className="text-xl ">Food Total: </p>
            <p className="text-xl">Name: </p>
            <p className="text-xl">Type: </p>
            <div className="w-full flex items-center ">
              <div className="w-full mt-6">
                {/* left  */}
                <p className="w-full py-1 my-1 ">Sizes: </p>
                <p className="ms-10">Small </p>
                <p className="ms-10">Medium </p>
                <p className="ms-10">Large </p>
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
          <div className="h-[170px] w-full flex flex-col p-4 gap-2 bg-white rounded-2xl">
            <p className="text-xl">Name of Food:</p>
            <input
              type="text"
              placeholder="Enter food here"
              className="w-full h-12 ps-2 text-xl bg-gray-200"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p className="text-xl">Food Price:</p>
            <input
              type="number"
              placeholder="Enter food here"
              className="w-full h-12 ps-2 text-xl bg-gray-200"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
        </div>
        {/* Right  */}
        <div className="relative w-2/5 h-[432px] p-4 bg-white rounded-2xl">
          <p>Type of Food:</p>
          <div className="flex justify-around">
            <div className="">
              <input className="" type="checkbox" />
              <span className="ms-2">Small</span>
            </div>

            <div className="">
              <input className="" type="checkbox" />
              <span className="ms-2">Small</span>
            </div>

            <div className="">
              <input className="" type="checkbox" />
              <span className="ms-2">Small</span>
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
                  onChange={() => setCategory("meal")}
                />
                <span className="ms-2">Meal</span>
              </div>

              <div className="">
                <input
                  className="ms-3"
                  type="checkbox"
                  onChange={() => setCategory("drinks")}
                />
                <span className="ms-2">Drinks</span>
              </div>

              <div className="">
                <input
                  className="ms-3"
                  type="checkbox"
                  onChange={() => setCategory("dessert")}
                />
                <span className="ms-2">Dessert</span>
              </div>
            </div>
            {/* right  */}
            <div className="w-full">
              <div className="">
                <input
                  type="checkbox"
                  onChange={() => setCategory("add-ons")}
                />
                <span className="ms-2">Add ons</span>
              </div>

              <div className="">
                <input type="checkbox" onChange={() => setCategory("combos")} />
                <span className="ms-2">Combos</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-900 rounded text-white font-semibold my-2">
            + Add
          </button>

          <img
            className="w-[150px] rounded-lg"
            src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="text-gray-700">Food Image:</p>
          <IoIosSend
            className="absolute bottom-7 right-10 cursor-pointer hover:scale-125 duration-200"
            size={60}
            onClick={addFood}
          />
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResAddFood;
