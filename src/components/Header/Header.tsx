import { ROUTE } from "../../routes";
import { CustomLink } from "../CustomLink/CustomLink";
import { StyledHeader, NavElement, NavIcons } from "./styles";
import { SearchInput } from "../SearchInput/SearchInput";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Favorites } from "../../assets/icons/favorites.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { ReactComponent as Account } from "../../assets/icons/account.svg";
import { useInput } from "../../hooks/useInput";

export const Header = () => {
  const userSearch = useInput();

  return (
    <StyledHeader>
      <NavElement>
        <CustomLink to={ROUTE.HOME}>
          <Logo />
        </CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.SEARCH}>
          <SearchInput type="text" placeholder="Search" {...userSearch} />
        </CustomLink>
      </NavElement>

      <NavIcons>
        <NavElement>
          <CustomLink to={ROUTE.FAVORITES}>
            <Favorites />
          </CustomLink>
        </NavElement>
        <NavElement>
          <CustomLink to={ROUTE.CART}>
            <Cart />
          </CustomLink>
        </NavElement>
        <NavElement>
          <CustomLink to={ROUTE.ACCOUNT}>
            <Account />
          </CustomLink>
        </NavElement>
      </NavIcons>
    </StyledHeader>
  );
};
