const server = require("./server");
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
