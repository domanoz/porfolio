const server = require("./server");
const path = require("path");
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
