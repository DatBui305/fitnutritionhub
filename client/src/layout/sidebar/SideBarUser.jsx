import React from "react";
import { Link } from "react-router-dom";

const SideBarUser = () => {
  return (
    <div className="w-1/5 bg-[#F2F7FB] h-screen">
      <Link to="">
        <div className="h-[70px] w-[300px] bg-[#6374AE] items-center flex justify-center rounded-tr-[15px] rounded-br-[15px] text-[#F2F7FB] font-wixmadefor font-bold text-2xl">
          Personal
        </div>
      </Link>
      <Link to="">
        <div className="h-[70px] w-[300px] bg-[#F2F7FB] items-center flex justify-center text-[#6374AE] font-wixmadefor font-bold text-2xl">
          Contract
        </div>
      </Link>
      <Link to="">
        <div className="h-[70px] w-[300px] bg-[#F2F7FB] items-center flex justify-center text-[#6374AE] font-wixmadefor font-bold text-2xl">
          Password
        </div>
      </Link>
      <Link to="">
        <div className="h-[70px] w-[300px] bg-[#F2F7FB] items-center flex justify-center text-[#6374AE] font-wixmadefor font-bold text-2xl">
          Email
        </div>
      </Link>
      <Link to="">
        <div className="h-[70px] w-[300px] bg-[#F2F7FB] items-center flex justify-center text-[#6374AE] font-wixmadefor font-bold text-2xl">
          Attributes
        </div>
      </Link>

      <div className="w-full h-[250px]"></div>
      <div className="pr-10">
        <hr className="bg-[#D3E2F2] w-[300px] h-[3px]" />
      </div>
      <div className="flex h-[200px] w-[300px] items-center justify-center text-[#6374AE] font-medium text-xl ">
        © 2024 FitNutritionHub. <br />
        All rights reserved.
      </div>
    </div>
  );
};

export default SideBarUser;
