const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  try {
    const allPlants = await table.select().firstPage();
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
