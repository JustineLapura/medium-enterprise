import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { data } from "../data";
import { hotelsData } from "../hotelsData";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [foods, setFoods] = useState(data);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.user.category === "hotels") {
      setFoods(hotelsData);
    }

    if (user && user.user.category === "restaurant") {
      setFoods(data);
    }
  }, [user]);

  //FlterFoods
  const filterType = (category) => {
    setFoods(data.filter((food) => food.category === category));
  };
  // Filter Price
  const filterPrice = (price1, price2) => {
    setFoods(
      data.filter((food) => food.price >= price1 && food.price <= price2)
    );
  };
  return (
    <>
      <Navbar />
      <div
        id="/#foods"
        className="relative max-w-[1640px] m-auto px-4 p-12 py-12"
      >
        {user && user.user.category === "restaurant" && (
          <h1 className="text-blue-900 font-bold text-4xl text-center">
            Menu Items
          </h1>
        )}
        {user && user.user.category === "hotels" && (
          <h1 className="text-blue-900 font-bold text-4xl text-center">
            Rooms
          </h1>
        )}
        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Filter type  */}
          <div className="">
            {user && user.user.category === "restaurant" && (
              <>
                <p
                  className={`font-bold py-4 text-center lg:text-left text-gray-700`}
                >
                  Filter Type
                </p>
                <div className={`flex justify-between flex-wrap font-bold`}>
                  <button
                    onClick={() => setFoods(data)}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    All
                  </button>
                  <button
                    onClick={() => filterType("burger")}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    Burgers
                  </button>
                  <button
                    onClick={() => filterType("pizza")}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    Pizza
                  </button>
                  <button
                    onClick={() => filterType("salad")}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    Salads
                  </button>
                  <button
                    onClick={() => filterType("chicken")}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    Chicken
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Filter Price  */}
          <div className="text-sm">
            {user && user.user.category === 'restaurant' && (
              <>
                <p
                  className={`font-bold py-4 text-center lg:text-left text-gray-700`}
                >
                  Filter Price
                </p>
                <div
                  className={`flex justify-between w-full flex-wrap font-bold`}
                >
                  <button
                    onClick={() => filterPrice(1, 250)}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    P1-$250
                  </button>
                  <button
                    onClick={() => filterPrice(250, 500)}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    P250-$500
                  </button>
                  <button
                    onClick={() => filterPrice(500, 1000)}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    P500-$1000
                  </button>
                  <button
                    onClick={() => filterPrice(1000, 2000)}
                    className="px-3 py-1 rounded-full border-blue-900 text-blue-900 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
                  >
                    P1000+
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Display foods  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((food) => (
            <div
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
              key={food.id}
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={food.image}
                width={200}
                height={100}
                alt={food.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className={`font-bold duration-300 text-gray-700`}>
                  {food.name}
                </p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    P{food.price}
                  </span>
                </p>
              </div>
              <div className="flex justify-end gap-2 items-center p-2"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
