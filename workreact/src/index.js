import "tw-elements-react/dist/css/tw-elements-react.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProvider } from "./context/Workcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WorkoutsContextProvider>
    <App />
  </WorkoutsContextProvider>
);
