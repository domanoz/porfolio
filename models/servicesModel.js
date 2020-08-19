const db = require("../database/dbConfig");

const getAllServices = (filter) => {
  if (!filter) {
    return db("services");
  } else {
    return db("services").where(filter);
  }
};
module.exports = {
  getAllServices,
};
