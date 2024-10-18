const Attributes = require("../models/attributes");
const User = require("../models/user");

const asyncHandler = require("express-async-handler");

const createAttributes = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const {
    weight,
    height,
    sleepHours,
    activityLevel,
    dietaryPreferences,
    heathCondition,
    stressLevel,
    fitnessExperience,
    exercisePreferences,
    fitnessGoal,
  } = req.body;
  if (
    !weight ||
    !height ||
    !sleepHours ||
    !activityLevel ||
    !dietaryPreferences ||
    !heathCondition ||
    !stressLevel ||
    !fitnessExperience ||
    !exercisePreferences ||
    !fitnessGoal
  )
    throw new Error("Missing input");
  const response = await Attributes.create({
    weight,
    height,
    sleepHours,
    activityLevel,
    dietaryPreferences,
    heathCondition,
    stressLevel,
    fitnessExperience,
    exercisePreferences,
    fitnessGoal,
    idUser: _id,
  });
  if (response) {
    await User.findByIdAndUpdate(
      _id,
      {
        $push: { idAttributes: response._id },
      },
      {
        new: true,
      }
    );
  }
  return res.json({
    success: response ? true : false,
    createAttributes: response ? response : "cannot create new attributes",
  });
});

module.exports = {
  createAttributes,
};
