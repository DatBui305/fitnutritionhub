import React, { useContext } from "react";
import Header from "../../layout/header/Header";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/sidebar/Sidebar";

const Password = () => {
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
              <h1 class="text-xl font-bold mb-4">Change password</h1>
              <p class="text-lg text-gray-700 mb-4">
                Change your account password. You should set a strong password
                to prevent unauthorized access to your account.
              </p>

              <div class="w-full mb-4">
                <label class="block text-lg font-medium text-gray-700">
                  Current password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current password"
                  class="mt-1 block w-full text-lg px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div class="w-full mb-4">
                <label class="block text-lg font-medium text-gray-700">
                  New password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  class="mt-1 block w-full text-lg px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div class="w-full mb-4">
                <label class="block text-lg font-medium text-gray-700">
                  Verify new password
                </label>
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Verify new password"
                  class="mt-1 block w-full text-lg px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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

export default Password;
