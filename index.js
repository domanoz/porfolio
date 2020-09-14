const server = require("./server");

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
