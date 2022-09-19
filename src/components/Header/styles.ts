import styled from "styled-components";

const StyledHeader = styled.nav`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 2fr 4fr 3fr;
  align-items: center;
  padding-block: 20px 24px;
`;

const NavElement = styled.li`
  list-style: none;
`;

const NavIcons = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  margin: 20px 19px;
`;

export { StyledHeader, NavElement, NavIcons };
