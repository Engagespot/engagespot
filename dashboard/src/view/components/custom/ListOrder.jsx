import React from 'react';
import { Col, Row } from 'antd';

function ListOrder({ name, data }) {
  return (
    <div className="ant-form-item">
      <Col span={12}>{name}</Col>
      <Col span={12}>{data}</Col>
    </div>
  );
}

export default ListOrder;
