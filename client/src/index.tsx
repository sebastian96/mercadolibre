import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRouter from "./router";
import "./styles/index.scss";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
