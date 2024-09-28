import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      // Handle successful login
      console.log("Login Successful", response.data);
    } catch (error) {
      // Handle login failure
      setErrorMessage("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div className="flex bg-white w-screen items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg w-[25rem] p-6">
        <h1 className="text-xl font-bold mb-6 text-center">
          Đăng nhập vào FitNutritionHub
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="flex items-center bg-blue-50 border border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                <FaUser />
              </span>
              <input
                className="bg-transparent flex-1 h-12 text-black px-2 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here!"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-blue-50 border border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                <FaLock />
              </span>
              <input
                className="bg-transparent flex-1 h-12 text-black px-2 focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password here!"
                required
              />
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="bg-blue-500 w-full text-white font-semibold py-3 rounded-lg hover:bg-blue-600"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
