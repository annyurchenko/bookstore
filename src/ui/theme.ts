import { css } from "styled-components";
import { Color } from "./colors";

export const theme = css`
  html[theme="ligth"] {
    --primary: ${Color.Primary};
    --primary-light: ${Color.PrimaryLight};
    --secondary: ${Color.Secondary};
    --white: ${Color.White};
    --gray: ${Color.Gray};
    --light: ${Color.Light};
    --red: ${Color.Red};
    --blue: ${Color.Blue};
    --green: ${Color.Green};
    --orange: ${Color.Orange};
    --purple: ${Color.Purple};
  }
  html[theme="dark"] {
    --primary: ${Color.White};
    --primary-light: ${Color.PrimaryLight};
    --secondary: ${Color.Secondary};
    --white: ${Color.Primary};
    --gray: ${Color.Gray};
    --light: ${Color.Light};
    --red: ${Color.Red};
    --blue: ${Color.Blue};
    --green: ${Color.Green};
    --orange: ${Color.Orange};
    --purple: ${Color.Purple};
  }
`;
