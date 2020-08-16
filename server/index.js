const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const config = require("../config");

const aboutRouter = require("../routes/aboutRouter");
const projectsRouter = require("../routes/projectsRouter");
const contactRouter = require("../routes/contactRouter");

const server = express();

server.use(cors());
server.use(helmet());

if (config.node_env === "development") {
  app.use(morgan("dev"));
}
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

server.use("/api/v1/about", aboutRouter);
server.use("/api/v1/projects", projectsRouter);
server.use("/api/v1/constact", contactRouter);

module.exports = server;
