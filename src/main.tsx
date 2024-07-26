import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MatchingProvider from "./context/MatchingProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MatchingProvider>
      <App />
    </MatchingProvider>
  </React.StrictMode>
);
