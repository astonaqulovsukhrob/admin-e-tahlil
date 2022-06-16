import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "./table.scss";

function GlobalTable() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  return <div className="site_table">
    <Table columns={currentPage?.columns} />
  </div>;
}

export default GlobalTable;
