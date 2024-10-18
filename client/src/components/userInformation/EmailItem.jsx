import React from "react";

const EmailItem = () => {
  return (
    <div>
      <div className="w-full h-[800px] bg-[#F2F7FB] border-[3px] border-[#6374AE] rounded-[30px]">
        <h1 className="px-5 pt-5 pb-3 text-[#262C40] font-wixmadefor text-3xl font-semibold">
          Email
        </h1>
        <p className="text-[#839DD1] font-medium text-xl px-5">
          Your backup email will also receive notifications related to account
          security and can also be <br /> used to reset your password.
        </p>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 pt-5 pb-3">
          Email
        </h1>
        <div className="px-5">
          <input
            type="text"
            placeholder="buianhdat305@gmail.com"
            className="w-[1020px] h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] text-xl font-semibold "
          />
        </div>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 pt-5 pb-3">
          Add new mail
        </h1>
        <div className="px-5">
          <input
            type="text"
            className="w-full h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] text-xl font-semibold "
          />
        </div>
        <div className="h-[300px]"></div>
        <div className="flex flex-row justify-end items-center ">
          <div className="pr-5">
            <button className="h-[70px] w-[200px] bg-[#FAF8F6] border-[3px] border-[#6374AE] rounded-[15px] text-[#6374AE] font-medium text-2xl">
              Cancel
            </button>
          </div>
          <div className="pr-5">
            <button className="h-[70px] w-[200px] bg-[#6374AE] border-[3px] rounded-[15px] text-[#FAF8F6] font-medium text-2xl">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
