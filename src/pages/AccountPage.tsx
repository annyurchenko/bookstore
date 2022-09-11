import { CustomLink } from "../components/CustomLink/CustomLink";
import { NavElement } from "../components/Header/styles";
import { ROUTE } from "../routes";

export const AccountPage = () => {
  return (
    <div>
      <div>AccountPage</div>

      <NavElement>
        <CustomLink to={ROUTE.SIGN_IN}>SignIn</CustomLink>
      </NavElement>
      <NavElement>
        <CustomLink to={ROUTE.SIGN_UP}>SignUp</CustomLink>
      </NavElement>
    </div>
  );
};
