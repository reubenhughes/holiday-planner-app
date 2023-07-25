import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HolidaysContextProvider } from "./context/HolidaysContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HolidaysContextProvider>
      <App />
    </HolidaysContextProvider>
  </React.StrictMode>
);
