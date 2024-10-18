const { notFound, errHandler } = require("../middlewares/errorHandler");
const postRouter = require("./post");
const userRouter = require("./user");
const questionRouter = require("./question");
const excerciseRouter = require("./excercise");
const recipeRouter = require("./recipe");
const attributesRouter = require("./attributes");

const initRoutes = (app) => {
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/question", questionRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/excercise", excerciseRouter);
  app.use("/api/v1/recipe", recipeRouter);
  app.use("/api/v1/attributes", attributesRouter);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
