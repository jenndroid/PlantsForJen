import React, { useState } from "react";
import Tags from "./Tags";
import { FormCard } from "./styledComponents";

export default function PlantForm({ plantAdded }) {
  //set states
  const [name, setName] = useState("");
  const [img_link, setImageLink] = useState("");
  const [tags, setTags] = useState([]);
  const [retailer, setRetailer] = useState("");
  const [count, setCount] = useState(0);

  //resetForm just empties out each field by resetting states
  const resetForm = () => {
    setName("");
    setImageLink("");
    setRetailer("");
    setCount(count + 1);
  };

  //submitCourse is an async function that will try to send a fetch request to this
  //endpoint, catching any errors
  //then it will reset the form and run 'courseAdded', which is a function that
  //has been passed as a prop to this component on line 4
  //it runs a fetch get to get every record in the courses table
  const submitPlant = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/Plants", {
        method: "POST",
        body: JSON.stringify({
          name,
          img_link,
          retailer,
          tags,
        }),
      });
      resetForm();
      plantAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormCard>
      <div className="formcard-header">Add a New Plant</div>
      <div className="formcard-body">
        <form className="" onSubmit={submitPlant}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img_link">Image Link</label>
            <input
              type="text"
              name="img_link"
              value={img_link}
              className="form-control"
              onChange={(e) => setImageLink(e.target.value)}
            />
          </div>
          <div className="form-group">
            <p>Tags</p>
            <Tags tagsUpdated={setTags} key={count} />
          </div>
          <div className="form-group">
            <label htmlFor="retailer">Retailer Link</label>
            <input
              type="text"
              name="retailer"
              value={retailer}
              className="form-control"
              onChange={(e) => setRetailer(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </FormCard>
  );
}
