import React, { useContext, useState, useEffect } from "react"; // Thêm useEffect
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const PersonalItem = () => {
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setGender(user.gender);
      setDob(user.dob ? user.dob.split("T")[0] : "");
    }
  }, [user]);
  const loadUser = () => {
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setGender(user.gender);
      setDob(user.dob ? user.dob.split("T")[0] : "");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const newDob = new Date(dob);
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        "http://localhost:5000/api/v1/user/personal",
        {
          firstname: firstname,
          lastname: lastname,
          dob: newDob,
          gender: gender,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="w-full h-[800px] bg-[#F2F7FB] border-[3px] border-[#6374AE] rounded-[30px]">
      <h1 className="px-5 pt-5 pb-3 text-[#262C40] font-wixmadefor text-3xl font-semibold">
        User Information
      </h1>
      <p className="text-[#839DD1]  font-wixmadefor font-semibold px-5 pb-5 text-xl">
        Manage your information!
      </p>
      <h1 className="text-[#6374AE] font-wixmadefor font-semibold text-2xl px-5 pb-3">
        First name
      </h1>
      <div className="px-5">
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)} // Thêm onChange
          className="w-full h-[70px] border-[3px] border-[#9CB6DD] rounded-[15px] focus:outline-none text-[#839DD1] font-semibold p-5 text-xl bg-[#FAF8F6]"
        />
      </div>
      <h1 className="text-[#6374AE] font-wixmadefor p-5 text-2xl font-semibold ">
        Lastname
      </h1>
      <div className="px-5">
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)} // Thêm onChange
          className="w-[1020px] h-[70px] rounded-[15px] border-[#9CB6DD] border-[3px] px-5 text-xl bg-[#FAF8F6] text-[#839DD1] font-semibold"
        />
      </div>
      <h1 className="text-[#6374AE] px-5 text-2xl py-5 font-semibold">
        Date of birth
      </h1>
      <div className="px-5">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)} // Thêm onChange
          className="w-full h-[70px] rounded-[15px] border-[3px] border-[#9CB6DD] px-[20px] bg-[#FAF8F6] text-[#839DD1] font-bold"
        />
      </div>
      <h1 className="text-[#6374AE] px-5 py-5 text-2xl font-semibold">
        Gender
      </h1>
      <div className="px-5">
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)} // Thêm onChange
          className="w-full h-[70px] rounded-[15px] border-[#9CB6DD] border-[3px] bg-[#FAF8F6] px-5 text-xl text-[#839DD1] font-semibold"
        />
      </div>
      <div className="flex justify-end">
        <div className="p-5">
          <button
            onClick={loadUser}
            className="h-[70px] w-[200px] bg-[#FAF8F6] border-[3px] rounded-[15px] text-xl text-[#6374AE] font-semibold border-[#6374AE] "
          >
            Cancel
          </button>
        </div>
        <div className="p-5">
          <button
            onClick={handleUpdate}
            className="h-[70px] w-[200px] bg-[#6374AE] rounded-[15px] text-xl text-[#F2F7FB] font-semibold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalItem;
