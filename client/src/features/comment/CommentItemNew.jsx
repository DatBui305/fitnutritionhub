import React from "react";

const CommentItemNew = () => {
  return (
    <div className="flex flex-row w-3/5 justify-between bg-[#FAF8F6]">
      <img
        src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/avatar-dep-60.jpg?gidzl=dqPU3a2_4qkMM5OCIgaLIPHGK0rKh15FZ5LM1WVw54FQ059N3AqI5zDN1m9S_HL7WWq21Z3koNHmGxmRJm"
        alt="avatar"
        className=" w-[80px] h-[80px] border-[3px] border-[#6374AE] rounded-[15px]"
      />
      <div className="px-3">
        <h1 className="text-[#6374AE] text-xl font-bold font-wixmadefor">
          Kathleen Brown
        </h1>
        <h2 className="text-[#839DD1] font-medium font-wixmadefor">
          about 4 hours ago
        </h2>
        <p className="text-[#262C40] font-bold text-xl font-wixmadefor">
          That Baked Salmon recipe is amazing! I made it last night, and the
          garlic herb butter added so much flavor. My whole family loved it!
        </p>
      </div>
      <div className="items-center flex">
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8835 13.1589L13.9443 22.8156L4.00507 13.1589C3.34949 12.533 2.83309 11.7808 2.48841 10.9496C2.14372 10.1184 1.97821 9.22614 2.0023 8.32908C2.02638 7.43203 2.23955 6.54958 2.62836 5.73731C3.01718 4.92504 3.57322 4.20054 4.26148 3.60944C4.94974 3.01834 5.75531 2.57345 6.62745 2.30277C7.4996 2.03209 8.41942 1.94149 9.32901 2.03667C10.2386 2.13186 11.1182 2.41077 11.9126 2.85584C12.7069 3.30091 13.3986 3.9025 13.9443 4.62273C14.4923 3.90773 15.1849 3.3114 15.9787 2.87105C16.7724 2.4307 17.6503 2.15582 18.5573 2.06361C19.4644 1.9714 20.3811 2.06384 21.25 2.33515C22.119 2.60646 22.9215 3.0508 23.6073 3.64036C24.2931 4.22992 24.8476 4.95201 25.2358 5.76143C25.6241 6.57085 25.8379 7.45018 25.8638 8.34439C25.8898 9.2386 25.7273 10.1284 25.3865 10.9582C25.0458 11.788 24.5341 12.5398 23.8835 13.1667"
            stroke="#262C40"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="text-[#262C40] font-medium pl-3 text-lg font-wixmadefor">
          12.3K
        </h1>
      </div>
    </div>
  );
};

export default CommentItemNew;
