const { notFound, errHandler } = require("../middlewares/errorHandler");
const postRouter = require("./post");
const userRouter = require("./user");
const questionRouter = require("./question")
const initRoutes = (app) => {
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/question", questionRouter);
  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
