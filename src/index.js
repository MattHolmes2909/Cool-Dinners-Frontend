import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
