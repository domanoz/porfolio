const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const config = require("../config");

const homeRouter = require("../routes/homeRouter");
const aboutRouter = require("../routes/aboutRouter");
const projectsRouter = require("../routes/projectsRouter");
const contactRouter = require("../routes/contactRouter");
const servicesRouter = require("../routes/servicesRouter");
const jobsRouter = require("../routes/jobsRouter");

const server = express();

server.use(cors());
server.use(helmet());

if (config.env === "development") {
  server.use(morgan("dev"));
}
server.use(express.json());

server.use("/api/v1/", homeRouter);
server.use("/api/v1/services", servicesRouter);
server.use("/api/v1/jobs", jobsRouter);
server.use("/api/v1/about", aboutRouter);
server.use("/api/v1/projects", projectsRouter);
server.use("/api/v1/contact", contactRouter);

module.exports = server;
