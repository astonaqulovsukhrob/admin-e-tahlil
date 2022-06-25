import React, { useEffect } from "react";
import GlobalModal from "../../Components/GlobalModal/GlobalModal";
import GlobalTable from "../../Components/GlobalTable/GlobalTable";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../../functions/Methods";
import { startLoading, stopLoading } from "../../redux/stored_reducer";

function Districts() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = currentPage?.optionName;
    if (url) {
      dispatch(startLoading());
      GET(currentPage?.optionName).then((res) => {
        console.log(res);
        if (res) {
          // dispatch(stopLoading());
        }
      });
      GET(currentPage?.optionRegion).then((res) => {
        console.log(res);
        if (res) {
          // dispatch(stopLoading());
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <GlobalModal />
      <GlobalTable />
    </div>
  );
}

export default Districts;
