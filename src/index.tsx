import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./ui/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>,
);
