import React from "react";
import SideBar from "../../layout/sidebar/SideBar";
import SideBarRight from "../../layout/sidebar/SideBarRight";
import NavBarNew from "../../layout/navBar/NavBarNew";
import InputQuestion from "../../components/input/InputQuestion";

const CreateQuestion = () => {
  return (
    <div className="w-full bg-[#F2F7FB] flex flex-row justify-between">
      <SideBar />
      <div>
        {/* <NavBarNew /> */}
        <InputQuestion />
      </div>
      <SideBarRight />
    </div>
  );
};

export default CreateQuestion;
