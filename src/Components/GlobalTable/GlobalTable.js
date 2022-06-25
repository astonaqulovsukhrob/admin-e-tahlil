import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "./table.scss";

function GlobalTable() {
  const { currentPage, loading, values, value } = useSelector(
    (s) => s?.unsaved__reducer
  );
  return (
    <div className="site_table">
      <Table
        columns={currentPage?.columns}
        dataSource={values?.users || value}
        loading={loading}
      />
    </div>
  );
}

export default GlobalTable;
