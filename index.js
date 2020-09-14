const server = require("./server");
const path = require("path");
const port = process.env.PORT || 4000;

const publicPath = path.join(__dirname, "..", "public");
server.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
