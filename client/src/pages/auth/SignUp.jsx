import React, { useState, useContext } from "react";
import coverImage from "../../assets/cover.png";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        {
          email: email,
          password: password,
          firstname: firstname,
          phone: phone,
        }
      );
      console.log(response.data);
      window.location.href = "/signin";
    } catch (error) {
      // Xử lý lỗi đăng nhập
      setErrorMessage("SIgn Up failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row bg-[#FAF8F6]">
      <div className="relative w-1/2 h-screen">
        <img
          src={coverImage}
          alt=""
          className="rounded-[30px] w-full h-full object-cover p-5"
        />
        <div className="absolute inset-5 bg-gradient-to-t from-[#6374AE] via-transparent to-transparent rounded-[15px]"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-16 bg-gradient-to-t rounded-[30px]">
          <h1 className="font-lobster text-[#F2F7FB] text-3xl font-bold">
            FitNutritionHub
          </h1>
          <p className="text-[#F2F7FB] font-wixmadefor text-2xl mt-2">
            Your go-to destination for delicious recipes, effective exercises,
            and health tips! Discover a variety of nutritious meals that fuel
            your body, explore workout routines to enhance your fitness journey,
            and access valuable health advice to support your well-being. Join
            us in embracing a healthier lifestyle, one recipe and workout at a
            time!
          </p>
        </div>
      </div>

      <div className="w-1/2 h-screen ">
        <h1 className="font-lobster text-[#6374AE] text-7xl px-10 pt-10 pb-10">
          Sign up
        </h1>
        <div className="px-10 pb-5 flex input:items-center justify-center flex-col">
          <h1 className="font-wixmadefor text-[#6374AE] font-semibold text-3xl pb-2">
            Email
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full h-[70px] border-[3px] border-[#9CB6DD] rounded-[15px] placeholder:text-[#9CB6DD] text-2xl font-semibold p-5 focus:outline-none text-[#9CB6DD]"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="px-10 pb-5 flex input:items-center justify-center flex-col">
          <h1 className="font-wixmadefor text-[#6374AE] font-semibold text-3xl pb-2">
            Password
          </h1>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-[70px] border-[3px] border-[#9CB6DD] rounded-[15px] placeholder:text-[#9CB6DD] text-2xl font-semibold p-5 focus:outline-none text-[#9CB6DD]"
            placeholder="Enter your password"
          />
        </div>
        <div className="px-10 pb-5 flex input:items-center justify-center flex-col">
          <h1 className="font-wixmadefor text-[#6374AE] font-semibold text-3xl pb-2">
            Firstname
          </h1>
          <input
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            required
            className="w-full h-[70px] border-[3px] border-[#9CB6DD] rounded-[15px] placeholder:text-[#9CB6DD] text-2xl font-semibold p-5 focus:outline-none text-[#9CB6DD]"
            placeholder="Enter your firstname"
          />
        </div>
        <div className="px-10 pb-5 flex input:items-center justify-center flex-col">
          <h1 className="font-wixmadefor text-[#6374AE] font-semibold text-3xl pb-2">
            Phone
          </h1>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full h-[70px] border-[3px] border-[#9CB6DD] rounded-[15px] placeholder:text-[#9CB6DD] text-2xl font-semibold p-5 focus:outline-none text-[#9CB6DD]"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="px-10 pb-5">
          {errorMessage && (
            <div className="text-red-500 text-center my-4">{errorMessage}</div>
          )}

          <button
            onClick={handleSignup}
            className=" flex items-center justify-center bg-[#6374AE] rounded-[15px] w-full h-[70px] font-wixmadefor text-3xl font-bold text-[#F2F7FB]"
          >
            Let's go
          </button>
        </div>
        <div className="px-10 pb-5">
          <Link to="/signin">
            <button className="flex items-center justify-evenly bg-[#F2F7FB] rounded-[15px] w-full h-[70px] font-wixmadefor text-3xl font-bold text-[#6374AE] border-[3px] border-[#6374AE]">
              <div className="w-1"></div>
              {/*can le*/}
              <div className="w-1"></div>
              <h1 className="text-center ">Already have? This way</h1>
              <svg
                width="52"
                height="50"
                viewBox="0 0 52 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1939 4.16666L26.8906 4.17707C32.5309 4.3542 37.8733 6.67196 41.7655 10.6304C45.6577 14.5889 47.7878 19.8708 47.6964 25.337C47.605 30.8032 45.2993 36.0155 41.2768 39.8497C37.2542 43.6839 31.8371 45.8328 26.1939 45.8328C20.5506 45.8328 15.1335 43.6839 11.111 39.8497C7.08839 36.0155 4.78274 30.8032 4.6913 25.337C4.59987 19.8708 6.72999 14.5889 10.6222 10.6304C14.5144 6.67196 19.8568 4.3542 25.4971 4.17707L26.1939 4.16666ZM27.5121 15.0208C27.0799 14.697 26.5366 14.5448 25.9927 14.595C25.4488 14.6452 24.945 14.8941 24.5836 15.2911C24.2223 15.6881 24.0305 16.2035 24.0471 16.7325C24.0638 17.2616 24.2877 17.7647 24.6734 18.1396L29.6003 22.9167H17.5917L17.3401 22.9312C16.7958 22.994 16.2968 23.2556 15.945 23.6628C15.5932 24.07 15.4151 24.592 15.4473 25.1221C15.4794 25.6522 15.7192 26.1504 16.1178 26.5149C16.5164 26.8794 17.0436 27.0827 17.5917 27.0833H29.6003L24.6734 31.8604L24.4949 32.0562C24.1607 32.475 24.0036 33.0012 24.0554 33.5282C24.1072 34.0551 24.3641 34.5431 24.7739 34.8932C25.1837 35.2433 25.7157 35.4291 26.2619 35.413C26.808 35.3968 27.3273 35.1799 27.7143 34.8062L36.3164 26.4729L36.4734 26.3021L36.6111 26.1167L36.7444 25.8812L36.839 25.6521L36.9035 25.4187L36.9401 25.1562L36.9465 25L36.9315 24.7542L36.8691 24.4458L36.7939 24.2271L36.6777 23.9917L36.525 23.7604C36.4615 23.6778 36.3918 23.5998 36.3164 23.5271L27.7143 15.1937L27.5121 15.0208Z"
                  fill="#6374AE"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
