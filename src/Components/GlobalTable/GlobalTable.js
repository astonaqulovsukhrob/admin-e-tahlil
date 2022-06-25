import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./table.scss";
import { setIsOpenModal, setRowId } from "../../redux/stored_reducer";

function GlobalTable() {
  const { currentPage, loading, values, value, rowId } = useSelector(
    (s) => s?.unsaved__reducer
  );
  const dispatch = useDispatch();

  const onClickRow = (record) => {
    return {
      onClick: () => {
        dispatch(setRowId(record?.id));
      },
      onDoubleClick: () => {
        dispatch(setIsOpenModal(true));
      },
    };
  };

  const setRowClassName = (record) => {
    return record?.id === rowId ? "blue" : "";
  };

  return (
    <div className="site_table">
      <Table
        columns={currentPage?.columns}
        dataSource={values?.users || value}
        // loading={loading}
        className="main-table"
        onRow={onClickRow}
        rowClassName={setRowClassName}
        scroll={{
          y: 450,
        }}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: true,
          // defaultPageSize: 13,
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    </div>
  );
}

export default GlobalTable;
