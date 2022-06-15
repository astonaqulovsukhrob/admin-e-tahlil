import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Popconfirm, Tooltip, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import Form from "../Form/Form";
import { setIsOpenModal } from "../../redux/stored_reducer";

function GlobalModal() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const [isRef, setisRef] = useState(false);
  const dispatch = useDispatch();

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
    dispatch(setIsOpenModal(true));
  };

  const handleEdit = () => {
    dispatch(setIsOpenModal(true));
  };

  const handleCancel = () => {
    dispatch(setIsOpenModal(true));
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
        visible={currentPage?.isOpenModal}
        onCancel={handleCancel}
        footer=""
        width={currentPage?.modal?.width}
        style={{ marginTop: -60 }}
      >
        <Form currentPage={currentPage} />
      </Modal>
    </>
  );
}

export default GlobalModal;
