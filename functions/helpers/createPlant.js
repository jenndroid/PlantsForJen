const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  //parse the event body as a json object
  //this will basically be an object
  const fields = JSON.parse(event.body);
  try {
    //to the table, pass an array of objects
    //you can pass several objects at once like this but we are only passing one
    //"one property, of "fields" " means one k-v pair with a k of fields
    //fields: {img_link: bfebfeji, name: Blah (Blah Blah)}
    const createdPlant = await table.create([{ fields }]);
    return formattedReturn(201, createdPlant);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
