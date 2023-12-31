import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Signup from "./screens/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPass from "./screens/ResetPass.jsx";
import ForgotPass from "./screens/ForgotPass.jsx";
export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPass/>} />
        <Route path="/reset/:token" element={<ResetPass/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

