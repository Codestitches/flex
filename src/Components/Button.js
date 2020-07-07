import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  border-radius: 5px;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  font-size: 1.4rem;
  background: var(--mainDark);
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--mainWhite)")};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
