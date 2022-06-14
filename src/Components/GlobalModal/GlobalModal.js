import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Popconfirm, Tooltip, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function GlobalModal() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const [isModal, setIsModal] = useState(false);
  const [isRef, setisRef] = useState(false);

  const handleSubmit = () => {};

  const onConfirm = () => {
    setisRef(true);
  };

  const onCancel = () => {
    // setRowId("");
    // dispatch(setRow(false));
    // dispatch(setRegion(""));
    // let row = document.querySelectorAll(".ant-table-row");
    // for (let i = 0; i < row.length; i++) {
    //   row[i].classList.remove("blue");
    // }
  };

  const showModal = () => {
    setIsModal(true);
  };

  const handleEdit = () => {
    setIsModal(true);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <>
      <Tooltip placement="top" title={"Қўшиш"}>
        <Button type="primary" onClick={showModal}>
          <PlusOutlined /> Қўшиш
        </Button>
      </Tooltip>
      <Tooltip placement="top" title={"Ўзгартириш"}>
        <Popconfirm
          title="1 та қаторни белгилнг!"
          okText="Ҳа"
          cancelText="Орқага"
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          <Button type="primary" onClick={handleEdit} style={{ margin: 8 }}>
            <EditOutlined /> Ўзгартириш
          </Button>
        </Popconfirm>
        {/* {rowId ? (
          <Button type="primary" onClick={handleEdit} style={{ margin: 8 }}>
            <EditOutlined /> Ўзгартириш
          </Button>
        ) : (
          <Popconfirm
            title="1 та қаторни белгилнг!"
            okText="Ҳа"
            cancelText="Орқага"
            onConfirm={onConfirm}
            onCancel={onCancel}
          >
            <Button type="primary" onClick={handleEdit} style={{ margin: 8 }}>
              <EditOutlined /> Ўзгартириш
            </Button>
          </Popconfirm>
        )} */}
      </Tooltip>
      <Tooltip placement="top" title="Ўчириш">
        <Button type="danger">
          <Popconfirm
            // title={rowId ? "Ўчирасизми ?" : "1 та қаторни белгилнг!"}
            okText="Ҳа"
            cancelText="Орқага"
            onConfirm={onConfirm}
            onCancel={onCancel}
          >
            <DeleteOutlined /> Ўчириш
          </Popconfirm>
        </Button>
      </Tooltip>
      <Modal
        title={currentPage?.text}
        visible={isModal}
        onCancel={handleCancel}
        footer=""
        width={850}
        style={{ marginTop: -60 }}
      ></Modal>
    </>
  );
}

export default GlobalModal;
