import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, NavElement } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <NavElement>
        <Link to="/">MainLogo</Link>
      </NavElement>
      <NavElement>
        <Link to="search">Search</Link>
      </NavElement>
      <NavElement>
        <Link to="favorites">Favorites</Link>
      </NavElement>
      <NavElement>
        <Link to="cart">Cart</Link>
      </NavElement>
      <NavElement>
        <Link to="sign-in">SignIn</Link>
      </NavElement>
      <NavElement>
        <Link to="sign-up">SignUp</Link>
      </NavElement>
    </StyledHeader>
  );
};
