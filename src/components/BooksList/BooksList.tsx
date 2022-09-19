import { BookCard } from "components/BookCard/BookCard";
import { Spinner } from "components/Spinner/Spinner";
import { useEffect } from "react";
import { fetchBooks } from "store/features/booksSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getBooks } from "store/selectors/booksSelectors";
import { IBook } from "types/types";
import { StyledBooksList } from "./styles";

export const BooksList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <StyledBooksList>
      {books.map((book: IBook) => {
        return <BookCard {...book} />;
      })}
    </StyledBooksList>
  );
};
