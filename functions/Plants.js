//just formats return
const formattedReturn = require("./helpers/formattedReturn");

//imports handler functions
const getAllPlants = require("./helpers/getAllPlants");
const createPlant = require("./helpers/createPlant");
const deletePlant = require("./helpers/deletePlant");
const updatePlant = require("./helpers/updatePlant");

//read method of the event and call appropriate function
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getAllPlants(event);
  } else if (event.httpMethod === "POST") {
    return await createPlant(event);
  } else if (event.httpMethod === "PUT") {
    return await updatePlant(event);
  } else if (event.httpMethod === "DELETE") {
    return await deletePlant(event);
  } else {
    return formattedReturn(405, {});
  }
};
