import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CompContextProvider from "./contexts/ComponentsContext.jsx";

createRoot(document.getElementById("root")).render(
  <CompContextProvider>
    <App />
  </CompContextProvider>
);
