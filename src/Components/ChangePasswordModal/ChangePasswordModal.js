import React from "react";
import { Modal } from "antd";
import ChangePassword from "./ChangePassword/ChangePassword";

function ChangePasswordModal({ visible, setVisible }) {
  return (
    <Modal
      title={"Паролни узгартириш"}
      visible={visible}
      onCancel={() => setVisible(false)}
      footer=""
      width={500}
      style={{ marginTop: -60 }}
    >
      <ChangePassword />
    </Modal>
  );
}

export default ChangePasswordModal;
