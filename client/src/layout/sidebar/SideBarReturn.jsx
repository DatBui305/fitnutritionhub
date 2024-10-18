import React from "react";
import { useNavigate } from "react-router-dom";

const SideBarReturn = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="w-full bg-[#F2F7FB] h-screen">
      <button onClick={handleBackClick}>
        <div className="h-[70px] w-[300px] bg-[#6374AE] py-3 rounded-tr-[10px] rounded-br-[10px] items-center flex justify-evenly font-wixmadefor font-bold text-3xl text-[#F2F7FB]">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.25 12.5L18.75 25L31.25 37.5"
              stroke="#F2F7FB"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1>Back</h1>
        </div>
      </button>

      <div className="h-screen w-full"></div>
      <hr className="h-[3px] w-[300px]" />
      <div className="flex h-[200px] items-center justify-center text-xl text-[#6374AE] font-medium text-center">
        <div className="w-[300px] justify-center">
          <h3 className="">
            © 2024 FitNutritionHub.
            <br />
            All rights reserved.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBarReturn;
