import React from "react";
import MainPage from "./page/MainPage/MainPage";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  const user = true;
  if (user) {
    return <MainPage />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    );
  }
}

export default App;
