
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/App"

import { ContextProvider } from "./context/context.provider";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
