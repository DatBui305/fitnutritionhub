import React, { useContext, useState, useEffect } from "react"; // Thêm useEffect
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const PasswordItem = () => {
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clear = () => {
    setCurrentPassword("");
    setNewPassword("");
    setVerifyPassword("");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (verifyPassword !== newPassword) {
      setErrorMessage("New password and verify password is not match");
    } else {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.put(
          "http://localhost:5000/api/v1/user/password",
          {
            oldPassword: currentPassword,
            newPassword: newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        clear();
      } catch (error) {
        setErrorMessage("Old password not match");
        console.error("Update failed:", error);
      }
    }
  };

  return (
    <div>
      <div className="w-full h-[800px] bg-[#F2F7FB] border-[3px] border-[#6374AE] rounded-[30px]">
        <h1 className="px-5 pt-5 pb-3 text-[#262C40] font-wixmadefor text-3xl font-semibold">
          Change password
        </h1>
        <p className="text-[#839DD1] font-medium text-xl px-5">
          Change your account password. You should set a strong password to
          prevent unauthorized <br />
          access to your account.
        </p>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 pt-5 pb-3">
          Current password
        </h1>
        <div className="px-5">
          <input
            type="text"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-[1020px] h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] text-xl font-semibold "
          />
        </div>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 pt-5 pb-3">
          New password
        </h1>
        <div className="px-5">
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] text-xl font-semibold "
          />
        </div>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 pt-5 pb-3">
          Verify password
        </h1>
        <div className="px-5">
          <input
            type="text"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            className="w-full h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] text-xl font-semibold "
          />
        </div>
        <div className="h-[170px]"></div>
        <div className="flex flex-row justify-end items-center ">
          <div className="pr-5">
            <button
              onClick={clear}
              className="h-[70px] w-[200px] bg-[#FAF8F6] border-[3px] border-[#6374AE] rounded-[15px] text-[#6374AE] font-medium text-2xl"
            >
              Cancel
            </button>
          </div>
          <div className="pr-5">
            {errorMessage && (
              <div className="text-red-500 text-center my-4">
                {errorMessage}
              </div>
            )}
            <button
              onClick={handleUpdate}
              className="h-[70px] w-[200px] bg-[#6374AE] border-[3px] rounded-[15px] text-[#FAF8F6] font-medium text-2xl"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordItem;
