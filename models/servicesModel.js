const db = require("../database/dbConfig");

const getAllServices = (filter) => {
  if (!filter) {
    return db("services");
  } else {
    return db("services").where(filter);
  }
};
const updateService = (id, service) => {
  const updated = db("services")
    .where({ id })
    .update({ title: service.title, text: service.text })
    .then(() => getAllServices());

  return updated;
};
module.exports = {
  getAllServices,
  updateService,
};
