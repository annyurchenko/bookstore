import { ChangeEvent } from "react";
import { Searchbar, StyledInput } from "./styles";
import { SearchLogo } from "assets";

interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ type, placeholder, value, onChange }: IProps) => {
  return (
    <Searchbar>
      <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <SearchLogo />
    </Searchbar>
  );
};
