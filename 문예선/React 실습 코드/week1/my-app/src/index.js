import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// eslint-disable-next-line
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import Book from "./chapter_03/Book";

const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
