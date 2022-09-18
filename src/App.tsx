import { Route, Routes } from "react-router-dom";
import { ROUTE } from "./routes";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { RequireAuth } from "./components/RequireAuth";
import {
  HomePage,
  SearchPage,
  CartPage,
  FavoritesPage,
  AccountPage,
  SignInPage,
  SignUpPage,
  NotFoundPage,
} from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />}>
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        </Route>
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

        {/* Private Routes*/}
        <Route element={<RequireAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.CART} element={<CartPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
