import React, { useState, useEffect } from "react";
import { Label } from "./styledComponents";

export default function Tags({ tagsUpdated, key }) {
  const tagChoices = ["Rare", "Expensive", "Fussy"];
  const [selectedTags, setSelectedTags] = useState([]);

  //key is sent from courseForm- it's the number of the course that's just been added
  //iterated by one with each new course added!!
  //so setSelectedTags, which just updates the tags on a course, is called each time a new one is added
  useEffect(() => {
    setSelectedTags([]);
  }, [key]);

  //tagChange checks whether the value of the event is already in the 'selectedTags' array
  //if not, add it to what has been selected
  //if so, deselect it by filtering OUT value from the selectedTags array
  const tagChange = (e) => {
    const value = e.target.value;
    const alreadySelected = selectedTags.includes(value);
    if (e.target.checked && !alreadySelected) {
      setSelectedTags([...selectedTags, value]);
    } else if (!e.target.checked && alreadySelected) {
      setSelectedTags(selectedTags.filter((prevTag) => prevTag !== value));
    }
  };

  //everytime selectedTags is updated with the function above, update the tags
  //idky it has tagsUpdated as a warning. Surely this creates an infinite loop?
  useEffect(() => {
    tagsUpdated(selectedTags);
  }, [selectedTags, tagsUpdated]);

  //return one fully operating checkbox,
  //which will call the tagChange function above on user click
  //for every tag choice given in the array on line 4
  return (
    <>
      {tagChoices.map((choice, index) => (
        <Label className="checkbox-inline mr-3" key={index}>
          <input type="checkbox" value={choice} onChange={tagChange} />
          {" " + choice}
        </Label>
      ))}
    </>
  );
}
