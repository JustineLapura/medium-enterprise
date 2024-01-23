import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div className="w-full bg-gray-300/80">
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
      <div className="w-full h-full min-h-screen max-w-[1200px] mx-auto flex items-center ">
        <div className="w-full">
          <h1 className="font-bold text-6xl text-gray-900">
            Business & Enterprises a likes
          </h1>
          <p className="font-semibold text-gray-900">Sign in to continue</p>
          <div className="my-8 w-20 h-1 rounded-full bg-gray-950" />

          <p className="text-gray-500">
            Admin side of Catbalogan City Enterprise, Helps Manage your business
            for your convenience
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-white w-[500px] h-[400px] flex flex-col px-6 gap-4 justify-center items-center rounded-3xl">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <div className="w-full flex flex-col">
              <label className="ml-16 mb-1 font-semibold text-gray-900">
                Email:
              </label>
              <input
                type="text"
                placeholder="email@gmail.com"
                className="w-3/4 mx-auto bg-gray-300/60 px-3 py-2 rounded-full"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="ml-16 mb-1 font-semibold text-gray-900">
                Password:
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-3/4 mx-auto bg-gray-300/60 px-3 py-2 rounded-full"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              className="px-10 py-1 rounded-full bg-orange-500 text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
