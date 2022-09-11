import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  list-style: none;
  color: black;
  text-decoration: none;
`;

const StyledActiveLink = styled(Link)`
  list-style: none;
  color: black;
  text-decoration: none;
  font-weight: 700;
`;
export { StyledLink, StyledActiveLink };
