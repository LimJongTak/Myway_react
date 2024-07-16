import React from "react";
import ReactDOM from "react-dom/client"; // Use this for React 18
import "./index.css"; // Ensure this file exists or remove it if it doesn't
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
