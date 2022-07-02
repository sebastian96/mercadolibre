import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Router from "./router";
import "./styles/index.scss";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
