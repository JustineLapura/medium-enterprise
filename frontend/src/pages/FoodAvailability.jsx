import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const FoodAvailability = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [data, setData] = useState([]);

  const { user } = useContext(AuthContext);

  const userCategory = user.user.category;

  console.log(userCategory);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch("http://localhost:4000/api/food");
      const json = await response.json();

      if (response.ok) {
        setData(json);
      }
    };

    const fetchRooms = async () => {
      const response = await fetch("http://localhost:4000/api/room");
      const json = await response.json();

      if (response.ok) {
        setData(json);
      }
    };

    if (userCategory === "hotels") {
      fetchRooms();
    }
    if (userCategory === "restaurant") {
      fetchFoods();
    }
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div className="-w-full max-w-[1200px] mx-auto py-10">
        {/* left  */}
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">
                Check the box if the item below is available
              </th>
              <th className="border border-slate-600 rounded-md">
                {userCategory === "restaurant" ? "Small" : "Solo"}
              </th>
              <th className="border border-slate-600 rounded-md">
                {userCategory === "restaurant" ? "Medium" : "Double"}
              </th>
              <th className="border border-slate-600 rounded-md">
                {userCategory === "restaurant" ? "Large" : "King Size"}
              </th>
              <th className="border border-slate-600 rounded-md">all sizes</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr className="h-8">
                  <td
                    style={{ fontFamily: "Aleo, sans-serif" }}
                    className="border border-slate-700 rounded-md font-semibold text-xl text-center"
                  >
                    {item.name}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="flex justify-center gap-x-4 border border-slate-700 rounded-md text-center">
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodAvailability;
