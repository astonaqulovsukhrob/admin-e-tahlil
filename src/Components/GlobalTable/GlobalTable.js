import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "./table.scss";

function GlobalTable() {
  const { currentPage, loading } = useSelector((s) => s?.unsaved__reducer);
  return (
    <div className="site_table">
      <Table columns={currentPage?.columns} loading={!loading} />
    </div>
  );
}

export default GlobalTable;
