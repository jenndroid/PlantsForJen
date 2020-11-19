import React from "react";

export default function Plant({ plant, refreshPlants }) {
  const markPlantPurchased = async () => {
    try {
      await fetch("//.netlify/functions/plants", {
        method: "PUT",
        body: JSON.stringify({ ...plant, purchased: true }),
      });
      refreshPlants();
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlant = async () => {
    try {
      await fetch("//.netlify/functions/plants", {
        method: "DELETE",
        body: JSON.stringify({ id: plant.id }),
      });
      refreshPlants();
    } catch (err) {
      console.error(err);
    }
  };

  //returns one component
  return (
    <div className="list-group-item">
      {/* the name is hyperlinked */}
      <h4 className="list-group-item-heading">{plant.name}</h4>
      {/* <a href={plant.img_link}></a> */}
      <img className="img plant" src={plant.img_link} alt={plant.name} />
      <p>
        {/* if there are tags for the course, display them by creating one span element for each  */}
        Tags:{" "}
        {plant.tags &&
          plant.tags.map((tag) => (
            <span className="badge badge-primary mr-2">{tag}</span>
          ))}
      </p>
      {/* if the course has not been purchased, give the option to mark it so */}
      {!plant.purchased && (
        <button className="btn btn-sm btn-primary" onClick={markPlantPurchased}>
          Purchased
        </button>
      )}
      {/* delete button */}
      <button className="btn btn-sm btn-danger ml-2" onClick={deletePlant}>
        Delete
      </button>
    </div>
  );
}
