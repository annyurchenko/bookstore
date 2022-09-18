import { useAppSelector } from "store/hooks";
import { Account } from "components/Account/Account";
import { Authorisation } from "components/Authorisation/Authorisation";

export const AccountPage = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? <Account /> : <Authorisation />;
};
