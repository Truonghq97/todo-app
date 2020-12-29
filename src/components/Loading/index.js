import React from "react";
import { Spin } from "antd";

function Loading(props) {
  const { isLoading } = props;
  return <div className="example">{isLoading && <Spin />}</div>;
}
export default Loading;
