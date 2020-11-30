import React from "react";
import Plant from "./Plant";
import { H2 } from "./styledComponents";

export default function PlantList({ plants, refreshPlants }) {
  return (
    <div>
      <H2 className="mt-5 mb-3">WANT</H2>
      <div className="card-container">
        {plants
          .filter((plant) => !plant.purchased)
          .map((plant) => (
            <Plant plant={plant} key={plant.id} refreshPlants={refreshPlants} />
          ))}
      </div>
      <H2 className="mt-5 mb-3">GOT</H2>
      <div className="card-container">
        {plants
          .filter((plant) => plant.purchased)
          .map((plant) => (
            <Plant plant={plant} key={plant.id} refreshPlants={refreshPlants} />
          ))}
      </div>
    </div>
  );
}
