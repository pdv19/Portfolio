import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import cursor context provider
import CursorProvider from "./context/CursorContext";
import MobileViewContext from "./context/MobileViewContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CursorProvider>
    <MobileViewContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MobileViewContext>
  </CursorProvider>
);
