import React from "react";
import ReactDOM from "react-dom";

// add routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./LandingPage/LandingPage";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ladingpage" element={<LandingPage />} />{" "}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
