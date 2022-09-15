import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./ui/GlobalStyles";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
