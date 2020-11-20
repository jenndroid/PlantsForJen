import styled from "styled-components";
import "../App.css";

export const StyledCard = styled.section`
  display: flex;
  align-items: center;
  height: 35rem;
  width: auto;
  margin: 1rem;
`;

export const ImageContainer = styled.div`
  height: 500px;
  width: 600px;
  z-index: 1;
  overflow: hidden;
  margin-left: 2rem;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3rem;
  width: 45%;
`;

export const Button = styled.button`
  width: fit-content;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`;

export const H1 = styled.h1`
  font-family: Martini Regular;
`;

export const H2 = styled.h2`
  font-family: Martini Regular;
`;

export const H4 = styled.h4`
  font-family: Martini Regular;
`;

export const H5 = styled.h5`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const FormCard = styled.div`
  opacity: 80%;
`;
