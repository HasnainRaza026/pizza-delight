import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background-color: #faf8f5;
  padding: 6px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  outline: none;
  &:focus {
    border: 2px solid var(--color-red);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #faf8f5;
  padding: 6px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  outline: none;
  &:focus {
    border: 2px solid var(--color-red);
  }
`;
