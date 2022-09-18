import { useAppSelector } from "store/hooks";
import { ROUTE } from "routes";
import { NavElement } from "../Header/styles";
import { CustomLink } from "../CustomLink/CustomLink";
import { SignUpPage, SignInPage } from "pages";

export const Authorisation = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? (
    <div>
      <NavElement>
        <CustomLink to={ROUTE.SIGN_UP}>
          <SignUpPage />
        </CustomLink>
      </NavElement>
    </div>
  ) : (
    <div>
      <NavElement>
        <CustomLink to={ROUTE.SIGN_IN}>
          <SignInPage />
        </CustomLink>
      </NavElement>
    </div>
  );
};
