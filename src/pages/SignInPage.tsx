import { ChangeEvent, useState } from "react";
import { getAuth, setEmail } from "store/features/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

export const SignInPage = () => {
  const { isAuth, email } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [newEmail, setNewEmail] = useState("");

  const handleAuth = () => {
    dispatch(getAuth());
  };

  const handleEmail = () => {
    dispatch(setEmail(newEmail));
  };

  const handleNewEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  return (
    <div>
      <div>SignInPage</div>
      <button onClick={handleAuth}>get auth</button>
      <h4>Authorisation complete: {`${isAuth}`}</h4>
      <input type="email" value={newEmail} onChange={handleNewEmail}></input>
      <h4>new email is: {email}</h4>
      <button onClick={handleEmail}>get email</button>
    </div>
  );
};
