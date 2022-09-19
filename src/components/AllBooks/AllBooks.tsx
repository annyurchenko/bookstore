import { BooksList } from "components/BooksList/BooksList";
import { Title } from "components/Title/Title";
import { StyledAllBooks } from "./styles";

export const AllBooks = () => {
  return (
    <>
      <Title value={"New Releases Books"} />
      <StyledAllBooks>
        <BooksList />
      </StyledAllBooks>
    </>
  );
};
