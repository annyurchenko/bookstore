import styled from "styled-components";

const StyledBooksList = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

export { StyledBooksList };
