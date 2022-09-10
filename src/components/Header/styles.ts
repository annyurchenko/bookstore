import styled from "styled-components";

const StyledHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-block: 20px 24px;
  background-color: bisque; //to delete later
`;

const NavElement = styled.li`
  list-style: none;
`;

export { StyledHeader, NavElement };
