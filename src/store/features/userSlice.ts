import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeValue = "light" | "dark";

interface UserState {
  id: null | string;
  isAuth: boolean;
  name: null | string;
  email: null | string;
  password: null | string;
  theme: ThemeValue;
}

const initialState: UserState = {
  id: null,
  isAuth: false,
  name: null,
  email: "",
  password: null,
  theme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAuth(state) {
      state.isAuth = true;
    },
    setEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
  },
});

export default userSlice.reducer;
export const { getAuth, setEmail } = userSlice.actions;
