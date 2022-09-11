import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../routes";

export const RequireAuth = () => {
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={`/${ROUTE.SIGN_IN}`} />;
};
