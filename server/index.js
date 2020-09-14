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
const loginRouter = require("../routes/loginRouter");

const server = express();

server.use(helmet());
server.use(cors({ origin: config.origin }));

if (config.env === "DEVELOPMENT") {
  server.use(morgan("dev"));
}
server.use(express.json());

server.use("/", homeRouter);
server.use("/services", servicesRouter);
server.use("/jobs", jobsRouter);
server.use("/about", aboutRouter);
server.use("/projects", projectsRouter);
server.use("/contact", contactRouter);
server.use("/login", loginRouter);

module.exports = server;
