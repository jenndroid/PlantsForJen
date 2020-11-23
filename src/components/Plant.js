import React from "react";
import {
  StyledCard,
  ImageContainer,
  Img,
  TextContainer,
  H4,
  Button,
} from "./styledComponents";

export default function Plant({ plant, refreshPlants }) {
  const markPlantPurchased = async () => {
    try {
      await fetch("/api/Plants", {
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
      await fetch("/api/Plants", {
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
    <StyledCard>
      <ImageContainer>
        <Img className="img plant" src={plant.img_link} alt={plant.name} />
      </ImageContainer>
      <TextContainer>
        <H4 className="list-group-item-heading">{plant.name.toUpperCase()}</H4>
        <p>
          {/* if there are tags for the course, display them by creating one span element for each  */}
          {/* Tags:{" "} */}
          {plant.tags &&
            plant.tags.map((tag) => (
              <>
                <span className="badge badge-mine mr-2 text">{tag}</span>
                <span class="sr-only">tagged details</span>
              </>
            ))}
        </p>
        {/* if the course has not been purchased, give the option to mark it so, and a retailer */}
        {!plant.purchased && (
          <>
            {/* make plant retailer bigger */}
            <a href={plant.retailer}>
              <p className="text">{plant.retailer}</p>
            </a>
            <Button
              // className="btn btn-sm btn-primary"
              onClick={markPlantPurchased}
            >
              Purchased
            </Button>
          </>
        )}
        {/* delete button */}
        <Button
          // className="btn btn-sm btn-danger ml-2"
          onClick={deletePlant}
        >
          Delete
        </Button>
      </TextContainer>
    </StyledCard>
  );
}
