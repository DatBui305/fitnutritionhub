import React from "react";

const NavBarNew = () => {
  return (
    <div className="w-full h-[110px] bg-[#F2F7FB] flex flex-row items-center justify-around rounded-[15px] border-[3px] border-[#6374AE]">
      <div className="flex flex-col relative">
        <h1 className="font-semibold font-wixmadefor text-xl text-[#262C40]">
          Got a Recipe You Love? Share It With Humans!
        </h1>
        <p className="text-[#839DD1] font-wixmadefor text-lg">
          Inspire others with your culinary creations! We'd love to see what
          you’re cooking up.
        </p>
      </div>

      <button className="w-[240px] h-[60px] bg-[#6374AE] rounded-[15px] flex items-center justify-around">
        <svg
          width="35"
          height="35"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 15H18.75M15 11.25V18.75M3.75 15C3.75 16.4774 4.04099 17.9403 4.60636 19.3052C5.17172 20.6701 6.00039 21.9103 7.04505 22.955C8.08971 23.9996 9.3299 24.8283 10.6948 25.3936C12.0597 25.959 13.5226 26.25 15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15C26.25 12.0163 25.0647 9.15483 22.955 7.04505C20.8452 4.93526 17.9837 3.75 15 3.75C12.0163 3.75 9.15483 4.93526 7.04505 7.04505C4.93526 9.15483 3.75 12.0163 3.75 15Z"
            stroke="#F2F7FB"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="font-wixmadefor text-[#F2F7FB] text-2xl font-semibold">
          Create
        </h1>
      </button>
    </div>
  );
};

export default NavBarNew;
