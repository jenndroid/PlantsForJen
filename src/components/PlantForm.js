import React, { useState } from "react";
import "../App.css";
import Tags from "./Tags";

import { FormCard, Label, Input, H5, Button } from "./styledComponents";

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
      <H5>ADD NEW PLANT</H5>
      <div className="formcard-body">
        <form className="" onSubmit={submitPlant}>
          <div className="form-group">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <Label htmlFor="img_link">Image Link</Label>
            <Input
              type="text"
              name="img_link"
              value={img_link}
              className="form-control"
              onChange={(e) => setImageLink(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <p className="text">Tags</p>
            <Tags tagsUpdated={setTags} />
          </div>
          <div className="form-group">
            <Label htmlFor="retailer">Retailer Link</Label>
            <Input
              type="text"
              name="retailer"
              value={retailer}
              className="form-control"
              onChange={(e) => setRetailer(e.target.value)}
            />
          </div>
          <Button type="submit"> > Submit</Button>
        </form>
      </div>
    </FormCard>
  );
}
