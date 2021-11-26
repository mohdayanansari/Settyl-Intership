import React from "react";
import ReactDOM from "react-dom";
import InitialRouter from "./InitialRouter";
import "./styles/tailwind.css";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <InitialRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
