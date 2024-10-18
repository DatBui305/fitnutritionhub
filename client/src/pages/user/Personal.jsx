import React, { useContext } from "react";
import PersonalItem from "../../components/userInformation/PersonalItem";
import SideBarRight from "../../layout/sidebar/SideBarRight";
import SideBarUser from "../../layout/sidebar/SideBarUser";

const Personal = () => {
  return (
    <div className="w-full bg-[#F2F7FB] flex flex-row justify-between">
      <SideBarUser />
      <div>
        {/* <NavBarNew /> */}
        <PersonalItem />
      </div>
      <SideBarRight />
    </div>
  );
};

export default Personal;
