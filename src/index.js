import React from "react";
// importing react dom to render pages
import ReactDOM from "react-dom/client";
// imporitng our main app.js where all the pages will render
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// imporitng our main csss file
import "./styles/main.scss";
// importing context so that all the pages will be able to access contxt data
import ContextProvider from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* waraping our application into contxt so that all the pages will be able to access contxt data  */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
