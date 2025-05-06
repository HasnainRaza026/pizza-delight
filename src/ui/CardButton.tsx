import styled from "styled-components";

const CardButton = styled.button`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-red);
  border-radius: 1000px;

  &:hover {
    background-color: var(--color-tomato);
  }
`;

export default CardButton;
