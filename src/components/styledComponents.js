import styled from "styled-components";
import "../App.css";

export const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35rem;
  width: auto;
  margin: 1rem;
  border: 2px solid black;
`;

export const ImageContainer = styled.div`
  height: 50%;
  width: auto;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
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
  margin-right: 3rem;
`;

export const Button = styled.button`
  position: relative;
  width: fit-content;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  font-family: Bagnard Sans;
  background-color: transparent;
  border: none;
  &:after {
    border: 0 solid transparent;
    transition: all 0.3s;
    content: "";
    height: 0;
    position: absolute;
    width: 24px;
    border-bottom: 2px solid #c1a9ae;
    bottom: -4px;
    left: 0;
  }
  &:hover:after {
    width: 100%;
  }
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
