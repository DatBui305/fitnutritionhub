import React, { useContext } from "react";
import Header from "../../layout/header/Header";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/sidebar/Sidebar";

const Contact = () => {
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
            <div class="flex flex-col items-center justify-center w-[40rem] h-auto p-6 border border-gray-300 rounded-lg shadow-md">
              <h1 class="text-xl font-bold mb-4">Your contact</h1>
              <p class="text-lg text-gray-700 mb-4">
                Managed your contact information
              </p>

              <div class="w-full mb-4">
                <label class="block text-lg font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={user.phone || "null"}
                  class="mt-1 h-[4rem] block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div class="w-full mb-4">
                <label class="block text-lg font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={user.address || "null"}
                  class="mt-1 block h-[4rem] w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
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

export default Contact;
