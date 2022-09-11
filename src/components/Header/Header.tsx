import { ROUTE } from "../../routes";
import { CustomLink } from "../CustomLink/CustomLink";
import { StyledHeader, NavElement } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <NavElement>
        <CustomLink to={ROUTE.HOME}> MainLogo</CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.SEARCH}>Search</CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.FAVORITES}>Favorites</CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.CART}>Cart</CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.SIGN_IN}>SignIn</CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.SIGN_UP}>SignUp</CustomLink>
      </NavElement>
    </StyledHeader>
  );
};
