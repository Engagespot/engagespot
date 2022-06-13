import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dynamicSettings } from './code.js';

import {
  Table,
  Switch,
  Radio,
  Form,
  Space,
  Row,
  Col,
  Card,
  Button,
} from 'antd';
import { RiCodeSSlashLine, RiArrowDownLine } from 'react-icons/ri';

export default function DynamicSettingsTable() {
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
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: () => (
        <Space size="middle">
          <a>Delete</a>
          <a className="ant-dropdown-link">
            More actions <RiArrowDownLine />
          </a>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + '2',
      address: 'New York No. ' + i + ' Lake Park',
      description:
        'My name is John Brown, I am ' +
        i +
        '2 years old, living in New York No. ' +
        i +
        ' Lake Park.',
    });
  }

  const defaultExpandable = {
    expandedRowRender: record => <p>{record.description}</p>,
  };
  const pagination = { position: 'bottom' };
  const defaultTitle = 'Here is title';
  const defaultFooter = 'Here is footer';

  const [xScroll, setXScroll] = useState();
  const [yScroll, setYScroll] = useState();
  const [ellipsis, setEllipsis] = useState();
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('default');
  const [title, setTitle] = useState(defaultTitle);
  const [showHeader, setShowHeader] = useState(true);
  const [footer, setFooter] = useState(defaultFooter);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');

  const state = {
    bordered: bordered,
    loading: loading,
    pagination: pagination,
    size: size,
    expandable: expandable,
    title: () => title,
    showHeader: showHeader,
    footer: () => footer,
    rowSelection: rowSelection,
    scroll: undefined,
    hasData: hasData,
    tableLayout: tableLayout,
    top: top,
    bottom: bottom,
  };

  const handleToggle = prop => enable => {
    if (prop == 'bordered') {
      setBordered(enable);
    } else if (prop == 'loading') {
      setLoading(enable);
    }
  };

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  const handleTableLayoutChange = e => {
    setTableLayout(e.target.value);
  };

  const handleExpandChange = enable => {
    setExpandable(enable ? defaultExpandable : undefined);
  };

  const handleEllipsisChange = enable => {
    setEllipsis(enable);
  };

  const handleTitleChange = enable => {
    setTitle(enable ? defaultTitle : '');
  };

  const handleHeaderChange = enable => {
    setShowHeader(enable ? true : false);
  };

  const handleFooterChange = enable => {
    setFooter(enable ? defaultFooter : null);
  };

  const handleRowSelectionChange = enable => {
    setRowSelection(enable ? {} : undefined);
  };

  const handleYScrollChange = enable => {
    setYScroll(enable);
  };

  const handleXScrollChange = e => {
    setXScroll(e.target.value);
  };

  const handleDataChange = hasData => {
    setHasData(hasData);
  };

  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns = columns.map(item => ({ ...item, ellipsis: ellipsis }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Dynamic Settings</h4>
          <p className="da-p1-body">
            Select different settings to see the result.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="da-overflow-hidden">
          <Form
            layout="inline"
            className="components-table-demo-control-bar"
            style={{ marginBottom: 16 }}
          >
            <Row gutter={[8, 16]}>
              <Col>
                <Form.Item label="Bordered">
                  <Switch
                    checked={bordered}
                    onChange={handleToggle('bordered')}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="loading">
                  <Switch
                    checked={loading}
                    onChange={handleToggle('loading')}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Title">
                  <Switch defaultChecked={true} onChange={handleTitleChange} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Column Header">
                  <Switch defaultChecked={true} onChange={handleHeaderChange} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Footer">
                  <Switch defaultChecked={true} onChange={handleFooterChange} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Expandable">
                  <Switch
                    checked={!!expandable}
                    onChange={handleExpandChange}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Checkbox">
                  <Switch
                    checked={!!rowSelection}
                    onChange={handleRowSelectionChange}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Fixed Header">
                  <Switch checked={!!yScroll} onChange={handleYScrollChange} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Has Data">
                  <Switch checked={!!hasData} onChange={handleDataChange} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Ellipsis">
                  <Switch
                    checked={!!ellipsis}
                    onChange={handleEllipsisChange}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Size">
                  <Radio.Group value={size} onChange={handleSizeChange}>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="middle">Middle</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Table Scroll">
                  <Radio.Group value={xScroll} onChange={handleXScrollChange}>
                    <Radio.Button value={undefined}>Unset</Radio.Button>
                    <Radio.Button value="scroll">Scroll</Radio.Button>
                    <Radio.Button value="fixed">Fixed Columns</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Table Layout">
                  <Radio.Group
                    value={tableLayout}
                    onChange={handleTableLayoutChange}
                  >
                    <Radio.Button value={undefined}>Unset</Radio.Button>
                    <Radio.Button value="fixed">Fixed</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Pagination Top">
                  <Radio.Group
                    value={top}
                    onChange={e => {
                      setTop(e.target.value);
                    }}
                  >
                    <Radio.Button value="topLeft">TopLeft</Radio.Button>
                    <Radio.Button value="topCenter">TopCenter</Radio.Button>
                    <Radio.Button value="topRight">TopRight</Radio.Button>
                    <Radio.Button value="none">None</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Pagination Bottom">
                  <Radio.Group
                    value={bottom}
                    onChange={e => {
                      setBottom(e.target.value);
                    }}
                  >
                    <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
                    <Radio.Button value="bottomCenter">
                      BottomCenter
                    </Radio.Button>
                    <Radio.Button value="bottomRight">BottomRight</Radio.Button>
                    <Radio.Button value="none">None</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Table
            {...state}
            pagination={{ position: [top, bottom] }}
            columns={tableColumns}
            dataSource={hasData ? data : null}
            scroll={scroll}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {dynamicSettings}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
