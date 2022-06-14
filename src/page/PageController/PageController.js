import { lazy, Suspense } from "react";
import {
  CATEGORIYES_PAGE,
  DISTRICT_PAGE,
} from "../../Components/constant/pageConstant";
import Categories from "../Categories/Categories";

const Districts = lazy(() => import("../Districts/Districts"));

export default ({ page }) => {
  switch (page?.type) {
    case DISTRICT_PAGE:
      return (
        <Suspense fallback="">
          <Districts />
        </Suspense>
      );
    case CATEGORIYES_PAGE:
      return (
        <Suspense fallback="">
          <Categories />
        </Suspense>
      );
    default:
      return (
        <Suspense fallback="">
          <h1>NotFoun Page</h1>
        </Suspense>
      );
  }
};
