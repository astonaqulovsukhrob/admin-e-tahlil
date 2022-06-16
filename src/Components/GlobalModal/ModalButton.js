import React, { useState } from "react";
import { Button, Popconfirm, Tooltip, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpenModal } from "../../redux/stored_reducer";

function ModalButton() {
  const { currentPage, rowId } = useSelector((s) => s?.unsaved__reducer);
  const [isRef, setisRef] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {};

  const onConfirm = () => {
    setisRef(true);
  };

  const onCancel = () => {
    // let row = document.querySelectorAll(".ant-table-row");
    // for (let i = 0; i < row.length; i++) {
    //   row[i].classList.remove("blue");
    // }
  };

  const showModal = () => {
    dispatch(setIsOpenModal(true));
  };

  const handleEdit = () => {
    if (rowId) {
      dispatch(setIsOpenModal(true));
    }
  };

  return (
    <div>
      {" "}
      <Tooltip placement="top" title={"Қўшиш"}>
        <Button type="primary" onClick={showModal}>
          <PlusOutlined /> Қўшиш
        </Button>
      </Tooltip>
      <Tooltip placement="top" title={"Ўзгартириш"}>
        {rowId ? (
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
        )}
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
    </div>
  );
}

export default ModalButton;
