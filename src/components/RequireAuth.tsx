import { useAppSelector } from "store/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../routes";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? <Outlet /> : <Navigate to={`/${ROUTE.ACCOUNT}/${ROUTE.SIGN_IN}`} />;
};
