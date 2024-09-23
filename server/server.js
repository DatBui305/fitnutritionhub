const express = require("express");
require("dotenv").config();
const dbConnect = require("./src/config/dbconnect");
const initRoutes = require("./src/routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
dbConnect();

initRoutes(app);

app.listen(port, () => {
  console.log("server running on the port " + port);
});
