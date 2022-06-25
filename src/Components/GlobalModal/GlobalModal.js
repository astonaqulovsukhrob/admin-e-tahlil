import React, { useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Form from "../Form/Form";
import { setIsOpenModal } from "../../redux/stored_reducer";
import ModalButton from "./ModalButton";

function GlobalModal() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setIsOpenModal(false));
  };

  return (
    <>
      <ModalButton />
      <Modal
        title={currentPage?.text}
        visible={currentPage?.isOpenModal}
        onCancel={handleCancel}
        footer=""
        width={currentPage?.modal?.width}
        style={{ marginTop: -60 }}
      >
        <Form />
      </Modal>
    </>
  );
}

export default GlobalModal;
