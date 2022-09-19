import { ROUTE } from "../../routes";
import { CustomLink } from "../CustomLink/CustomLink";
import { StyledHeader, NavElement, NavIcons } from "./styles";
import { SearchInput } from "../SearchInput/SearchInput";

import { AccountLogo, CartLogo, Logo, FavoritesLogo, ThemeLogo } from "assets";

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
          <ThemeLogo />
        </NavElement>
        <NavElement>
          <CustomLink to={ROUTE.FAVORITES}>
            <FavoritesLogo />
          </CustomLink>
        </NavElement>
        <NavElement>
          <CustomLink to={ROUTE.CART}>
            <CartLogo />
          </CustomLink>
        </NavElement>
        <NavElement>
          <CustomLink to={ROUTE.ACCOUNT}>
            <AccountLogo />
          </CustomLink>
        </NavElement>
      </NavIcons>
    </StyledHeader>
  );
};
