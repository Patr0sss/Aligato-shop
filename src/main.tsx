import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootRouter from "./RootRouter";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootRouter />
    {/* <App /> */}
  </React.StrictMode>
);
