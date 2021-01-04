const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  try {
    const allPlants = await table.select().firstPage();
    //a lot of extraneous info is stripped out-
    //for each element of the returned array, an object is created with id
    // and all the rest of the fields
    const formattedAllPlants = allPlants.map((plant) => ({
      id: plant.id,
      ...plant.fields,
    }));
    return formattedReturn(200, formattedAllPlants);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
