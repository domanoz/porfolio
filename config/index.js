require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV || "DEVELOPMENT",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  origin: [
    "http://localhost",
    "http://localhost:3000",
    "http://www.domansky.pl",
    "https://www.domansky.pl",
  ],
  errors: {
    invalidId: { message: "Invalid asset id!", status: 401 },
    missingFields: {
      message: "Missing one of the required fields!",
      status: 401,
    },
    exceededMaxLength: {
      message: "Contents exceeds maximum allowed length",
      status: 401,
    },
    aboutNotFound: { message: "About not found!", status: 404 },
    serviceNotFound: { message: "Service not found!", status: 404 },
    jobNotFound: { message: "Job not found!", status: 404 },
    couldntGetAllSlides: { message: "Couldn't get about slides" },
    couldntAddAboutLine: { message: "Couldn't add about line to database!" },
    couldntUpdateAboutLine: { message: "Couldn't update about line info!" },
    couldntDeleteAboutLine: { message: "Couldn't delete about line!" },
    projectNotFound: { message: "Project not found!", status: 404 },
    couldntGetAllProject: { message: "Couldn't get project!" },
    couldntAddProject: { message: "Couldn't add project to database!" },
    couldntUpdateProject: { message: "Couldn't update project info!" },
    couldntDeleteProject: { message: "Couldn't delete project!" },
    questionNotFound: { message: "Question not found!", status: 404 },
    couldntGetAllQuestion: { message: "Couldn't get question!" },
    couldntAddQuestion: { message: "Couldn't add question to database!" },
    couldntUpdateQuestion: { message: "Couldn't update question info!" },
    couldntDeleteQuestion: { message: "Couldn't delete question!" },
    noTokenProvided: {
      message: "You need to login in order to gain access!",
      status: 403,
    },
    invalidLogin: { message: "Invalid username or password", status: 401 },
  },
};
