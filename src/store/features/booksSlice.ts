import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookstoreAPI } from "services/bookstoreAPI";
import { IBook, IBooks } from "types/types";

interface BooksState {
  books: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk<IBooks, undefined>("books/fetchBooks", async () => {
  return bookstoreAPI.getAllBooks();
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default booksSlice.reducer;
export { fetchBooks };
