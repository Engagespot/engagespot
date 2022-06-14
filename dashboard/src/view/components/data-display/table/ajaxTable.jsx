import React, { useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ajax } from './code.js';

import reqwest from 'reqwest';
import { Table, Row, Col, Card, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function AjaxTable() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => name.first + ' ' + name.last,
      width: '20%',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  useEffect(() => {
    fetch(pagination);
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  const fetch = (params = {}) => {
    setLoading(true);

    reqwest({
      url: 'https://randomuser.me/api?results=200',
      method: 'get',
      type: 'json',
    }).then(data => {
      setLoading(false);
      setData(data.results);
      setPagination({
        ...params.pagination,
        total: 200,
      });
    });
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={15} span={20}>
          <h4>Ajax</h4>
          <p className="da-p1-body">
            This example shows how to fetch and present data from a remote
            server, and how to implement filtering and sorting in server side by
            sending related parameters to server. Setting
            rowSelection.preserveSelectedRowKeys to keep the key when enable
            selection.
            <br />
            <strong>
              Note, this example use Mock API that you can look up in Network
              Console.
            </strong>
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
          <Table
            columns={columns}
            rowKey={record => record.login.uuid}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
            scroll={{ x: 800 }}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {ajax}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
