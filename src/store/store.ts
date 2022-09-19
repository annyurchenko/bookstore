import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import booksReducer from "./features/booksSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    // favorites: "",
    //  cart: "",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
