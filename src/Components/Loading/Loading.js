import React from "react";
import { Spin } from "antd";

function Loading() {
  const example = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };
  return (
    <div style={example}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;
