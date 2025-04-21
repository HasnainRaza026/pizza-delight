import styled from "styled-components";

const SearchBar = styled.input`
  width: 200px;
  padding: 6px 18px;
  background-color: #faf8f5;
  border-radius: 1000px;
  outline: none;
  border: 1px solid #dbdbdb;

  &::placeholder {
    opacity: 60%;
  }

  &:focus {
    border-color: var(--color-red);
  }

  @media (min-width: 640px) {
    width: 220px;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export default SearchBar;
