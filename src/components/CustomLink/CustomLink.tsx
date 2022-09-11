import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "../../routes";
import { StyledLink, StyledActiveLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ to, children }: IProps) => {
  const isActivePage = useMatch(to);

  return isActivePage ? (
    <StyledActiveLink to={to}>{children}</StyledActiveLink>
  ) : (
    <StyledLink to={to}>{children}</StyledLink>
  );
};
