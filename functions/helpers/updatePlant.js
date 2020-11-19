const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  //use destructuring- pull out id and spread the rest into an object called fields
  const { id, ...fields } = JSON.parse(event.body);
  try {
    //an array of one object, with 2 key value pairs (properties)
    const updatedPlant = await table.update([{ id, fields }]);
    return formattedReturn(200, updatedPlant);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
