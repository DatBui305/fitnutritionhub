import React, { useContext, useState, useEffect } from "react"; // Thêm useEffect
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const ContactItem = () => {
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (user) {
      setPhone(user.phone);
      setAddress(user.address);
    }
  }, [user]);
  const loadUser = () => {
    if (user) {
      setPhone(user.phone);
      setAddress(user.address);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        "http://localhost:5000/api/v1/user/contact",
        {
          phone: phone,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      console.log(response.data.rs);
      setUser(response.data.rs);
      localStorage.setItem("user", JSON.stringify(response.data.rs));
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <div className="w-full h-[800px] bg-[#F2F7FB] border-[3px] border-[#6374AE] rounded-[30px]">
        <h1 className="px-5 pt-5 pb-3 text-[#262C40] font-wixmadefor text-3xl font-semibold">
          Your contact
        </h1>
        <p className="text-[#839DD1] font-semibold text-xl px-5">
          Managed your contact information!
        </p>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 pt-5 pb-3">
          Phone number
        </h1>
        <div className="px-5">
          <input
            type="text"
            placeholder="0352368923"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-[1020px] h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] font-semibold text-xl"
          />
        </div>
        <h1 className="text-[#6374AE] font-semibold text-2xl px-5 py-3">
          Address
        </h1>
        <div className="px-5">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="04 St. Chon Tam 8, Hoa Khanh Nam, Lien Chieu District, Da Nang City"
            className="w-full h-[70px] bg-[#FAF8F6] border-[3px] border-[#9CB6DD] rounded-[15px] px-4 py-2 text-[#9CB6DD] placeholder:text-[#9CB6DD] font-semibold text-xl"
          />
        </div>
        <div className="h-[350px]"></div>
        <div className="flex flex-row justify-end items-center ">
          <div className="pr-5">
            <button
              onClick={loadUser}
              className="h-[70px] w-[200px] bg-[#FAF8F6] border-[3px] border-[#6374AE] rounded-[15px] text-[#6374AE] font-medium text-2xl"
            >
              Cancel
            </button>
          </div>
          <div className="pr-5">
            <button
              onClick={handleUpdate}
              className="h-[70px] w-[200px] bg-[#6374AE] border-[3px] rounded-[15px] text-[#FAF8F6] font-medium text-2xl"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
