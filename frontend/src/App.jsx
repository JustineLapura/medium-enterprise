import { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/aleo";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AddFood from "./pages/AddFood";
import FoodAvailability from "./pages/FoodAvailability";
import { AuthContext } from "./context/AuthContext";
import VacantTime from "./pages/VacantTime";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/register"
          element={!user ? <Registration /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-food"
          element={user ? <AddFood /> : <Navigate to="/login" />}
        />
        <Route
          path="/food-availability"
          element={user ? <FoodAvailability /> : <Navigate to="/login" />}
        />
        <Route
          path="/vacant-time"
          element={user ? <VacantTime /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
