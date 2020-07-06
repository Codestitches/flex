import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  font-size: 1.4rem;
  background: transparent;
  color: var(--mainDark);
  margin-top: 0 100%;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: var(--mainDark);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
