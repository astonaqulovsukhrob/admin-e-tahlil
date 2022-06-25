import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
const Loading = lazy(() => import("./Components/Loading/Loading"));
const LoginPage = lazy(() => import("./Components/LoginPage/LoginPage"));
const MainPage = lazy(() => import("./page/MainPage/MainPage"));

function App() {
  // const { user } = useSelector((s) => s?.unsaved__reducer);
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
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Navigate to={"/"} />
            </Suspense>
          }
        />
      </Routes>
    );
  }
}

export default App;
