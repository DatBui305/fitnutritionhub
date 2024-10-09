import React, { useContext } from "react";
import Header from "../../layout/header/Header";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/sidebar/Sidebar";

const Personal = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="w-full flex h-screen">
        <div className="w-1/4 py-[4.5rem] h-screen bg-slate-100">
          <Sidebar />
        </div>
        <div className="w-3/4 flex justify-center items-center">
          <div className="border border-gray-300">
            <div className="flex flex-col items-center justify-center w-[50rem] h-[40rem] p-10">
              <h1 className="text-xl font-bold mb-4">Thông Tin Cá Nhân</h1>
              <div className="w-full mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Firstname
                </label>
                <input
                  type="text"
                  name="username"
                  value={user.firstname}
                  className="mt-1 block w-full h-[4rem] px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Lastname
                </label>
                <input
                  type="text"
                  name="displayname"
                  value={user.lastname}
                  className="mt-1 block w-full h-[4rem] px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Dateofbirth
                </label>
                <input
                  type="date"
                  name="birthdate"
                  value={user.dob}
                  className="mt-1 block w-full h-[4rem] px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  className="mt-1 block w-full h-[4rem] px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>Choose</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex flex-row w-full h-[4rem] justify-end">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
