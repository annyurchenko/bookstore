import React from "react";
import { IBook } from "types/types";
import { StyledBookCard } from "./styles";

export const BookCard = ({ title, price, url }: IBook) => {
  return (
    <StyledBookCard>
      <img src={url} alt="book" />
      <h3>{title}</h3>
      <p>author</p>
      <h3>{price}</h3>
    </StyledBookCard>
  );
};
