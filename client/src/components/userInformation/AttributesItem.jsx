import React from "react";

const AttributesItem = () => {
  return (
    <div className="w-3/5 h-[800px] bg-[#F2F7FB] border-[3px] border-[#6374AE] rounded-[30px]">
      <h1 className="text-[#262C40] font-wixmadefor text-3xl px-5 pt-10 font-semibold">
        Attributes
      </h1>
      <p className="font-wixmadefor text-xl px-5 py-3 font-medium text-[#839DD1]">
        To improve the accuracy of AI recommendations, it's crucial to input
        complete and detailed attributes.
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col px-5">
          <h1>Height</h1>
          <input type="text" />
        </div>
        <div className="flex flex-col px-5">
          <h1>Height</h1>
          <input
            type="text"
            placeholder="njcdnjdcn"
            className="h-[70px] rounded-[15px] border-[3px] border-[#9CB6DD] px-3 text-[#9CB6DD]"
          />
        </div>
      </div>
    </div>
  );
};

export default AttributesItem;
