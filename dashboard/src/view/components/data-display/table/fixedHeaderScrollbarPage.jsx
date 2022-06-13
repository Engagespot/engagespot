import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { fixedHeaderScrollbarPage } from './code.js';

import { Table, Switch, Row, Col, Card, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function FixedHeaderScrollbarPageTable() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [fixedTop, setFixedTop] = useState(false);

  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John ' + i,
      age: 32,
      address: 'London Park no ' + i,
    });
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Fixed header and scroll bar with the page</h4>
          <p className="da-p1-body">
            For long table，need to scroll to view the header and scroll
            bar，then you can now set the fixed header and scroll bar to follow
            the page.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1500 }}
            summary={pageData => (
              <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={2}>
                    <Switch
                      checkedChildren="Fixed Top"
                      unCheckedChildren="Fixed Top"
                      checked={fixedTop}
                      onChange={() => {
                        setFixedTop(!fixedTop);
                      }}
                    />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2} colSpan={8}>
                    Scroll Context
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
            sticky
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {fixedHeaderScrollbarPage}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
