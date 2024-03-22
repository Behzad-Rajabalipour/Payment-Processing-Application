import React, { Component } from "react";
import style from "./styles/style.module.css"; 

import Home from "./components/Home";
import PaymentPortal from "./components/PaymentPortal/PaymentPortal";
import ConfirmationPage from "./components/PaymentPortal/ConfirmationPage";
import NotFound from "./components/NotFound";

// Importing necessary modules for React Router
import { Routes, Route, Navigate } from "react-router-dom";

// Defining the main App component as a class component
class App1 extends Component {
  render() {
    return (
    // JSX fragment wrapping the entire component
      <>
        {/* Content area with routes */}
        <div className={style.box1}>
          <Routes>
            <Route path="/" element={<PaymentPortal />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/ConfirmationPage" element={<ConfirmationPage />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route path="/*" element={<Navigate to="/not-found" />}></Route>
          </Routes>
        </div>
      </>
    );
  }
}

export default App1;
