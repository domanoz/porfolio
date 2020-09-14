const server = require("./server");
const express = require("express");
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));

  const path = require("path");
  server.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
