import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/App";
import { AppContextProvider } from "./context/app.context.providers";
import "./sass/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import { ContextProvider } from "./context/context.provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
