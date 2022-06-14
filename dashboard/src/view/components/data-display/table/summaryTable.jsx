import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { summary } from './code.js';

import { Table, Typography, Row, Col, Card, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Text } = Typography;

export default function SummaryTable() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Borrow',
      dataIndex: 'borrow',
    },
    {
      title: 'Repayment',
      dataIndex: 'repayment',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      borrow: 10,
      repayment: 33,
    },
    {
      key: '2',
      name: 'Jim Green',
      borrow: 100,
      repayment: 0,
    },
    {
      key: '3',
      name: 'Joe Black',
      borrow: 10,
      repayment: 10,
    },
    {
      key: '4',
      name: 'Jim Red',
      borrow: 75,
      repayment: 45,
    },
  ];

  const fixedColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      fixed: true,
      width: 100,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ];

  const fixedData = [];
  for (let i = 0; i < 20; i += 1) {
    fixedData.push({
      key: i,
      name: ['Light', 'Bamboo', 'Little'][i % 3],
      description: 'Everything that has a beginning, has an end.',
    });
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={15} span={20}>
          <h4>Summary</h4>
          <p className="da-p1-body">
            Set summary content by summary prop. Sync column fixed status with
            Table.Summary.Cell. You can fixed it by set Table.Summary fixed
            prop(since 4.16.0).
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
            dataSource={data}
            pagination={false}
            bordered
            scroll={{ x: 500 }}
            summary={pageData => {
              let totalBorrow = 0;
              let totalRepayment = 0;

              pageData.forEach(({ borrow, repayment }) => {
                totalBorrow += borrow;
                totalRepayment += repayment;
              });

              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Total</Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="danger">{totalBorrow}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text>{totalRepayment}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Balance</Table.Summary.Cell>
                    <Table.Summary.Cell colSpan={2}>
                      <Text type="danger">{totalBorrow - totalRepayment}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />

          <br />

          <Table
            columns={fixedColumns}
            dataSource={fixedData}
            pagination={false}
            scroll={{ x: 2000, y: 500 }}
            bordered
            summary={() => (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    This is a summary content
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
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
          {summary}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
