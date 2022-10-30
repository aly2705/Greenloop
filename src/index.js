import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { UsersContextProvider } from "./store/users-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <UsersContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersContextProvider>
  </AuthContextProvider>
);
