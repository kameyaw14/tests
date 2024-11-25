import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CompContextProvider from "./contexts/ComponentsContext.jsx";
import AppContextProvider from "./contexts/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      {" "}
      {/* BrowserRouter is used here */}
      <CompContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </CompContextProvider>
    </Router>
  </StrictMode>
);
