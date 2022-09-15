import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // books: "",
    // favorites: "",
    //  cart: "",
  },
});
export { store };
