import React, { useState } from "react";
import Tags from "./Tags";

export default function PlantForm({ plantAdded }) {
  //set states
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);

  //resetForm just empties out each field by resetting states
  const resetForm = () => {
    setName("");
    setLink("");
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
      await fetch("/api/plants", {
        method: "POST",
        body: JSON.stringify({
          name,
          link,
          tags,
        }),
      });
      resetForm();
      plantAdded();
    } catch (err) {
      console.error(err);
    }
    console.log(name, link);
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
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              value={link}
              className="form-control"
              onChange={(e) => setLink(e.target.value)}
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
