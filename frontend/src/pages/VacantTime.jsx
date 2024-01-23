import React, { useState } from "react";
import Navbar from "../components/Navbar";

const VacantTime = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="w-full h-20 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl ">Close Button: </h1>
            <div
              className={`relative border ms-3  w-12 h-6 rounded-full ${
                isOpen ? "bg-green-500" : "bg-red-500"
              } flex items-center cursor-pointer`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={
                  isOpen
                    ? "absolute right-1 h-[95%] w-5 rounded-full bg-white  ms-1"
                    : "absolute left-0 h-[95%] w-5 rounded-full bg-white  ms-1"
                }
              />
            </div>
          </div>
          <div className="flex ms-">
            <p>Turn on </p>
            <span className="w-5 h-5 bg-green-400 mx-2"> </span>
            <p>"Closed Button when it's closing time</p>
          </div>
        </div>
        <div className="w-full bg-gray-200">
          <h1 className="p-4 text-xl text-gray-700">Alloted Time Work</h1>
          <div className="w-full flex bg-white text-center max-w-[1200px] mx-auto">
            <div className="w-2/4 border border-gray-500">
              <ul>
                <li className="border border-gray-500 py-2 font-bold text-xl">
                  Weekdays
                </li>
                <li className="border border-gray-500 py-1">Monday</li>
                <li className="border border-gray-500 py-1">Tuesday</li>
                <li className="border border-gray-500 py-1">Wednesday</li>
                <li className="border border-gray-500 py-1">Thursday</li>
                <li className="border border-gray-500 py-1">Friday</li>
              </ul>
            </div>
            <div className="w-1/4 border border-gray-500">
              <ul>
                <li className="border border-gray-500 py-2 font-bold text-xl">
                  Am
                </li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
              </ul>
            </div>
            <div className="w-1/4 border border-gray-500">
              <ul>
                <li className="border border-gray-500 py-2 font-bold text-xl">
                  Pm
                </li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex bg-white text-center max-w-[1200px] mx-auto mt-6">
            <div className="w-2/4 border border-gray-500">
              <ul>
                <li className="border border-gray-500 py-2 font-bold text-xl">
                  Weekends
                </li>
                <li className="border border-gray-500 py-1">Saturday</li>
                <li className="border border-gray-500 py-1">Sunday</li>
              </ul>
            </div>
            <div className="w-1/4 border border-gray-500">
              <ul>
                <li className="border border-gray-500 py-2 font-bold text-xl">
                  Am
                </li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
              </ul>
            </div>
            <div className="w-1/4 border border-gray-500">
              <ul>
                <li className="border border-gray-500 py-2 font-bold text-xl">
                  Pm
                </li>
                <li className="border border-gray-500 py-1">n/a</li>
                <li className="border border-gray-500 py-1">n/a</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacantTime;
