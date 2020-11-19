import React from "react";
import Plant from "./Plant";

export default function PlantList({ plants, refreshPlants }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">Want</h2>
      <div className="list-group">
        {plants
          .filter((plant) => !plant.purchased)
          .map((plant) => (
            <Plant plant={plant} key={plant.id} refreshPlants={refreshPlants} />
          ))}
      </div>
      <h2 className="mt-5 mb-3">Got</h2>
      {plants
        .filter((plant) => plant.purchased)
        .map((plant) => (
          <Plant plant={plant} key={plant.id} refreshPlants={refreshPlants} />
        ))}
    </div>
  );
}
