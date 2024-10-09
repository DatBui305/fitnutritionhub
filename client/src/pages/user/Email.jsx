import React, { useContext } from "react";
import Header from "../../layout/header/Header";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/sidebar/Sidebar";

const Email = () => {
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
              <h1 class="text-xl font-bold mb-4">Emails</h1>
              <p class="text-lg text-gray-700 mb-4">
                Your backup email will also receive notifications related to
                account security and can also be used to reset your password.
              </p>

              <div class="w-full mb-4 flex-row items-center flex">
                <span class="block text-lg font-medium text-gray-700 pr-3">
                  {user.email}
                </span>
                <div className="pr-3">
                  <span class="inline-flex items-center px-3 py-1 text-lg font-medium text-white bg-green-600 rounded-full">
                    Email
                  </span>
                </div>
                <div>
                  <span class="inline-flex items-center px-3 py-1 text-lg font-medium text-white bg-gray-400 rounded-full">
                    Verified
                  </span>
                </div>
              </div>

              <div class="w-full mb-4">
                <label class="block text-lg font-medium text-gray-700">
                  Update your email.
                </label>
                <input
                  type="email"
                  name="newEmail"
                  placeholder="you@your.domain"
                  class="mt-1 block w-full h-[4rem] px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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

export default Email;
