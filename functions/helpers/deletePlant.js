const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  const { id } = JSON.parse(event.body);
  try {
    //if I take out the const deletedPlant it works but I get an error so leaving it
    const deletedPlant = await table.destroy(id);
    //nothing returned from a delete! Only do the deletion and return status code
    return formattedReturn(200, deletedPlant);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
