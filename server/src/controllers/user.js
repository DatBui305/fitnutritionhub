const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/jwt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const register = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  if (!email || !password || !lastname || !firstname) {
    return res.status(400).json({
      success: false,
      mes: "Missing inputs",
    });
  }
  const user = await User.findOne({ email });
  if (user) throw new Error("User already existed");
  else {
    const newUser = await User.create(req.body);
    return res.status(200).json({
      success: newUser ? true : false,
      mes: newUser
        ? "Register is successfully, please go to login"
        : "Something went wrong",
    });
  }
});

//refresh token -> cap moi access token
//access token -> xac thuc nguoi dung, quan quyeen nguoi dung
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false, // Corrected
      mes: "Missing inputs", // Corrected
    });
  }
  //plain object
  const response = await User.findOne({ email });
  if (response && (await response.isCorrectPassword(password))) {
    //tach password va role ra khoi response
    const { password, role, refreshToken, ...userData } = response.toObject();
    //tao accesstoken
    const accessToken = generateAccessToken(response._id, role);
    //tao refreshtoken
    const newRefreshToken = generateRefreshToken(response._id);
    // luu refresh token vao db
    await User.findByIdAndUpdate(
      response._id,
      { refreshToken: newRefreshToken },
      { new: true }
    );
    // luu refresh token vao cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      success: true,
      accessToken,
      userData,
    });
  } else {
    throw new Error("Invalid credential");
  }
});

const getCurrent = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id).select("-refreshToken -password -role");
  return res.status(200).json({
    success: user ? true : false,
    rs: user ? user : "user not found",
  });
});

const getUser = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const user = await User.findById(uid).select("-refreshToken -password -role");
  return res.status(200).json({
    success: user ? true : false,
    rs: user ? user : "user not found",
  });
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  //lay token tu cookie
  const cookie = req.cookies;
  //check xem co token hay ko
  if (!cookie && !cookie.refreshToken)
    throw new Error("No refresh token in cookies");
  //check token co hop le hay khonng
  const rs = await jwt.verify(cookie.refreshToken, process.env.JWT_SECRET);
  const response = await User.findOne({
    _id: rs._id,
    refreshToken: cookie.refreshToken,
  });
  return res.status(200).json({
    success: response ? true : false,
    newAccessToken: response
      ? generateAccessToken(response._id, response.role)
      : "Refresh token not matched",
  });
});

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie || !cookie.refreshToken)
    throw new Error("No refresh token in cookie");
  //xoa refresh token in db
  await User.findOneAndUpdate(
    { refreshToken: cookie.refreshToken },
    { refreshToken: "" },
    { new: true }
  );
  //xoa refresh token o cookie trinh duyet
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({
    success: true,
    mes: "logout is done",
  });
});

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  refreshAccessToken,
  getUser,
};
