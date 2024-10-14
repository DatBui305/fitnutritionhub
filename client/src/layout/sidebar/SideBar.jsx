import React from "react";

const SideBar = () => {
  return (
    <div className="w-full bg-[#F2F7FB] h-screen">
      <div className="h-[70px] w-[300px] bg-[#6374AE] py-3 rounded-tr-[10px] rounded-br-[10px] items-center flex justify-center font-wixmadefor font-bold text-3xl text-[#F2F7FB]">
        Newest
      </div>
      <div className="h-[70px] w-[300px] bg-[#F2F7FB] py-3 rounded-tr-[10px] rounded-br-[10px] items-center flex justify-center font-wixmadefor font-bold text-3xl text-[#6374AE]">
        Following
      </div>
      <div className="h-[70px] w-[300px] bg-[#F2F7FB] py-3 rounded-tr-[10px] rounded-br-[10px] items-center flex justify-center font-wixmadefor font-bold text-3xl text-[#6374AE]">
        Trending
      </div>
      <div className="h-[70px] w-[300px] bg-[#F2F7FB] py-3 rounded-tr-[10px] rounded-br-[10px] items-center flex justify-center font-wixmadefor font-bold text-3xl text-[#6374AE]">
        Bookmark
      </div>
      <div className="h-[450px] w-full"></div>
      <hr />
      <div className="flex h-[200px] items-center justify-center text-xl text-[#6374AE] font-medium text-center">
        <h3 className="">
          © 2024 FitNutritionHub.
          <br />
          All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default SideBar;
