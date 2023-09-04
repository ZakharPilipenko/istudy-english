import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStorage from "./components/storage/UserStorage";
import CardStorage from "./components/storage/CardStorage";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{ user: new UserStorage(), card: new CardStorage() }}
  >
    <App />
  </Context.Provider>
);
