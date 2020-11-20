import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  display: flex;
  align-items: center;
  height: 25rem;
  width: auto;
  margin: 1rem;
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: auto;
  z-index: 1;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 8rem;
`;

const Button = styled.button`
  width: fit-content;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`;

const H5 = styled.h5`
  margin-top: 1rem;
  margin-bottom: 1rem;
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
      <ImageContainer>
        <Img className="img plant" src={plant.img_link} alt={plant.name} />
      </ImageContainer>
      <TextContainer>
        <h4 className="list-group-item-heading">{plant.name}</h4>
        <p>
          {/* if there are tags for the course, display them by creating one span element for each  */}
          {/* Tags:{" "} */}
          {plant.tags &&
            plant.tags.map((tag) => (
              <span className="badge badge-primary mr-2">{tag}</span>
            ))}
        </p>
        {/* if the course has not been purchased, give the option to mark it so, and a retailer */}
        {!plant.purchased && (
          <>
            <a href={plant.retailer}>
              <H5>{plant.retailer}</H5>
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
