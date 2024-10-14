import React from "react";

const LikeAndDislikeNew = () => {
  return (
    <div>
      <div className="flex flex-row w-3/5 justify-between">
        <div className="pr-5 w-1/2">
          <button className="w-full h-[70px] border-[3px] bg-[#6374AE] border-[#6374AE] rounded-[15px] font-wixmadefor text-2xl font-bold text-[#F2F7FB]">
            Love this!
          </button>
        </div>
        <div className="pl-5 w-1/2">
          <button className="w-full h-[70px] border-[3px] bg-[#FAF8F6] border-[#6374AE] rounded-[15px] font-wixmadefor text-2xl font-bold text-[#6374AE]">
            Share
          </button>
        </div>
      </div>

      {/* icons */}
      <div className="flex justify-start">
        <div className="flex flex-row pt-5 pr-5 items-center">
          <svg
            className=""
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8425 13.1589L13.9033 22.8156L3.96405 13.1589C3.30847 12.533 2.79208 11.7808 2.44739 10.9496C2.10271 10.1184 1.93719 9.22614 1.96128 8.32908C1.98537 7.43203 2.19853 6.54958 2.58735 5.73731C2.97616 4.92504 3.53221 4.20054 4.22047 3.60944C4.90873 3.01834 5.71429 2.57345 6.58644 2.30277C7.45858 2.03209 8.37841 1.94149 9.288 2.03667C10.1976 2.13186 11.0772 2.41077 11.8715 2.85584C12.6659 3.30091 13.3576 3.9025 13.9033 4.62273C14.4513 3.90773 15.1439 3.3114 15.9377 2.87105C16.7314 2.4307 17.6093 2.15582 18.5163 2.06361C19.4234 1.9714 20.34 2.06384 21.209 2.33515C22.0779 2.60646 22.8804 3.0508 23.5663 3.64036C24.2521 4.22992 24.8065 4.95201 25.1948 5.76143C25.5831 6.57085 25.7969 7.45018 25.8228 8.34439C25.8488 9.2386 25.6863 10.1284 25.3455 10.9582C25.0048 11.788 24.4931 12.5398 23.8425 13.1667"
              stroke="#262C40"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-slate-800 font-medium pl-3 text-xl font-wixmadefor">
            12.3K
          </h1>
        </div>
        {/* cai comment */}
        <div className="flex flex-row pt-5 items-center">
          <svg
            className=""
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.34295 8.51489H18.9448M8.34295 13.7151H16.2943M21.5953 2.01465C22.6497 2.01465 23.6609 2.42556 24.4065 3.15698C25.1521 3.88839 25.571 4.88041 25.571 5.9148V16.3152C25.571 17.3496 25.1521 18.3416 24.4065 19.073C23.6609 19.8044 22.6497 20.2153 21.5953 20.2153H14.9691L8.34295 24.1155V20.2153H5.69249C4.63807 20.2153 3.62684 19.8044 2.88125 19.073C2.13566 18.3416 1.7168 17.3496 1.7168 16.3152V5.9148C1.7168 4.88041 2.13566 3.88839 2.88125 3.15698C3.62684 2.42556 4.63807 2.01465 5.69249 2.01465H21.5953Z"
              stroke="#262C40"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-slate-800 font-medium font-wixmadefor pl-3 text-xl">
            374
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LikeAndDislikeNew;
