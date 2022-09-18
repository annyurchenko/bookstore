import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: null | string;
  isAuth: boolean;
  name: null | string;
  email: null | string;
  password: null | string;
}

const initialState: UserState = {
  id: null,
  isAuth: false,
  name: null,
  email: "",
  password: null,
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
