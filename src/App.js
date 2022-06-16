import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import LoginPage from "./Components/LoginPage/LoginPage";
const MainPage = lazy(() => import("./page/MainPage/MainPage"));

function App() {
  const user = true;
  if (user) {
    return (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    );
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
