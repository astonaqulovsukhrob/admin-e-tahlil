import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AllPage } from "../../Components/grouping/grouping";
import Navbar from "../../Components/Navbar/Navbar";
import PageController from "../PageController/PageController";

function MainPage() {
  return (
    <>
      <Navbar />
      <Routes>
        {AllPage?.map((page, i) => {
          return (
            <Route
              path={page?.path}
              element={
                <Suspense fallback="">
                  <PageController page={page} />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default MainPage;
