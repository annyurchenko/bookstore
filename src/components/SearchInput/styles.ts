import styled from "styled-components";
import { Color } from "../../ui/colors";

const Searchbar = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;

  background: ${Color.White};
  border: 1px solid ${Color.Gray};
`;

const StyledInput = styled.input`
  padding-right: 18px;
  font-size: 16px;
  line-height: 32px;
  color: ${Color.Secondary};
  background: ${Color.White};
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  box-sizing: border-box;
  &::-webkit-box-sizing,
  &::-moz-box-sizing {
    box-sizing: border-box;
  }
`;

export { StyledInput, Searchbar };
