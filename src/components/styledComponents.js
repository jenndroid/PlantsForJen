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
  font-family: Bagnard Sans;
  background-color: transparent;
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
  font-family: Martini Regular;
`;

export const FormCard = styled.div`
  opacity: 80%;
  height: 28rem;
  width: auto;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid hsl(111, 44%, 18%);
  outline: none;
  background-color: transparent;
`;

export const Label = styled.label`
  font-family: Bagnard Sans;
`;
