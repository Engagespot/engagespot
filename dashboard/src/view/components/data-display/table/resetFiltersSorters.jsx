import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { resetFiltersSorters } from './code.js';

import { Table, Space, Row, Col, Card, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function ResetFiltersSortersTable() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [filteredInfo, setFilteredInfo] = useState({
    name: null,
    address: null,
  });

  const [sortedInfo, setSortedInfo] = useState({
    order: null,
    columnKey: null,
  });

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    // //console.log('Various parameters', pagination, filters, sorter);

    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({
      name: null,
      address: null,
    });
  };

  const clearAll = () => {
    setFilteredInfo({
      name: null,
      address: null,
    });
    setSortedInfo({
      order: null,
      columnKey: null,
    });
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      ellipsis: true,
    },
  ];

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={15} span={20}>
          <h4>Reset filters and sorters</h4>
          <p className="da-p1-body">
            Control filters and sorters by filteredValue and sortOrder.
          </p>
        </Col>

        <Col lg={9} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Space style={{ marginBottom: 16 }}>
            <Row gutter={[8, 8]}>
              <Col>
                <Button onClick={setAgeSort}>Sort age</Button>
              </Col>

              <Col>
                <Button onClick={clearFilters}>Clear filters</Button>
              </Col>

              <Col>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
              </Col>
            </Row>
          </Space>

          <Table
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            scroll={{ x: 500 }}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {resetFiltersSorters}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
