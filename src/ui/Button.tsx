import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: var(--color-red);
  border-radius: 6px;
  padding: 14px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color: var(--color-tomato);
  }
`;

export default Button;
