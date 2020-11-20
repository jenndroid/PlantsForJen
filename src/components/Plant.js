import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: auto;
  border: 5px solid black;
  margin: 1rem;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: auto;
  z-index: 1;
  border: 5px solid blue;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border: 5px solid red;
`;

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
      {/* the name is hyperlinked */}
      <h4 className="list-group-item-heading">{plant.name}</h4>
      {/* <a href={plant.img_link}></a> */}
      <ImageContainer>
        <Img className="img plant" src={plant.img_link} alt={plant.name} />
      </ImageContainer>
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
    </StyledCard>
  );
}
