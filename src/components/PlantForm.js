import React, { useState } from "react";
import Tags from "./Tags";

export default function PlantForm({ plantAdded }) {
  //set states
  const [name, setName] = useState("");
  const [img_link, setImageLink] = useState("");
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);

  //resetForm just empties out each field by resetting states
  const resetForm = () => {
    setName("");
    setImageLink("");
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
      await fetch("//.netlify/functions/plants", {
        method: "POST",
        body: JSON.stringify({
          name,
          img_link,
          tags,
        }),
      });
      resetForm();
      plantAdded();
    } catch (err) {
      console.error(err);
    }
    console.log(name, img_link);
  };

  return (
    <div className="card">
      <div className="card-header">Add a New Plant</div>
      <div className="card-body">
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
