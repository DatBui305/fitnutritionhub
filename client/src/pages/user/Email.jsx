import React, { useContext } from "react";
import SideBarRight from "../../layout/sidebar/SideBarRight";
import SideBarUser from "../../layout/sidebar/SideBarUser";
import EmailItem from "../../components/userInformation/EmailItem";

const Email = () => {
  return (
    <div className="w-full bg-[#F2F7FB] flex flex-row justify-between">
      <SideBarUser />
      <div>
        {/* <NavBarNew /> */}
        <EmailItem />
      </div>
      <SideBarRight />
    </div>
  );
};

export default Email;
