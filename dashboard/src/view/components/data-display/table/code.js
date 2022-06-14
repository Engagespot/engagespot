export const basic = `
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          return (
            <Tag className="da-mb-md-8" color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a href="#">Invite {record.name}</a>
        <a href="#">Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["designer"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 1000 }} />
);
`;

export const jsxStyleApi = `
import { Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['designer'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

return (
  <Table dataSource={data} scroll={{ x: 1000 }}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
`;

export const selection = `
import React, { useState } from "react";

import { Table, Radio, Divider } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    //console.log(
      "selectedRowKeys: " + selectedRowKeys,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const [selectionType, setSelectionType] = useState("checkbox");

return (
  <>
    <Radio.Group
      onChange={({ target: { value } }) => {
        setSelectionType(value);
      }}
      value={selectionType}
    >
      <Radio value="checkbox">Checkbox</Radio>
      <Radio value="radio">Radio</Radio>
    </Radio.Group>

    <Divider />

    <Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
      scroll={{ x: 500 }}
    />
  </>
);
`;

export const selectionAndOperation = `
import React, { useState } from "react";

import { Table, Button } from "antd";

const [selectedRowKeys, setSelectedRowKeys] = useState([false]);
const [loading, setLoading] = useState(false);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: 'John Brown ' + i,
    age: 32,
    address: 'London, Park Lane no. ' + i,
  });
}

const start = () => {
  setLoading(true)
  // ajax request after empty completing
  setTimeout(() => {
    setSelectedRowKeys([])
    setLoading(false)
  }, 1000);
};

const onSelectChange = (selectedRowKeys) => {
  setSelectedRowKeys(selectedRowKeys);
};

const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
};
const hasSelected = selectedRowKeys.length > 0;

return (
  <>
    <div className="da-mb-16">
      <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
        Reload
      </Button>

      <span className="da-ml-8">
        {hasSelected ? 'Selected ' + selectedRowKeys.length + ' items' : ''}
      </span>
    </div>

    <Table 
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      scroll={{ x: 500 }}
    />
  </>
);
`;

export const customSelection = `
import React, { useState } from "react";

import { Table } from "antd";

const [selectedRowKeys, setSelectedRowKeys] = useState([]);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: 'John Brown ' + i,
    age: 32,
    address: 'London, Park Lane no. ' + i,
  });
}

const onSelectChange = (selectedRowKeys) => {
  setSelectedRowKeys(selectedRowKeys);
};

const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
  selections: [
    {
      key: 'all',
      text: 'Select All Data',
      onSelect: changableRowKeys => {
        let newSelectedRowKeys = [];
        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
          return true;
        });
        setSelectedRowKeys(newSelectedRowKeys);
      },
    },
    {
      key: 'none',
      text: 'Clear All Data',
      onSelect: changableRowKeys => {
        let newSelectedRowKeys = [];
        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
          return false;
        });
        setSelectedRowKeys(newSelectedRowKeys);
      },
    },
    {
      key: 'odd',
      text: 'Select Odd Row',
      onSelect: changableRowKeys => {
        let newSelectedRowKeys = [];
        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
          if (index % 2 !== 0) {
            return false;
          }
          return true;
        });
        setSelectedRowKeys(newSelectedRowKeys);
      },
    },
    {
      key: 'even',
      text: 'Select Even Row',
      onSelect: changableRowKeys => {
        let newSelectedRowKeys = [];
        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
          if (index % 2 !== 0) {
            return true;
          }
          return false;
        });

        setSelectedRowKeys(newSelectedRowKeys);
      },
    },
  ],
};

return (
  <Table
    rowSelection={rowSelection}
    columns={columns}
    dataSource={data}
    scroll={{ x: 500 }}
  />
);
`;

export const filterAndSorter = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with 'value'
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
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
];

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

function onChange(pagination, filters, sorter, extra) {
  //console.log('params', pagination, filters, sorter, extra);
}

return (
  <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 500 }} />
);
`;

export const filterInTree = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
        children: [
          {
            text: 'Yellow',
            value: 'Yellow',
          },
          {
            text: 'Pink',
            value: 'Pink',
          },
        ],
      },
      {
        text: 'Category 2',
        value: 'Category 2',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
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
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];

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

function onChange(pagination, filters, sorter, extra) {
  //console.log('params', pagination, filters, sorter, extra);
}

return (
  <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 500 }} />
);
`;

export const multipleSorter = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

function onChange(pagination, filters, sorter, extra) {
  //console.log('params', pagination, filters, sorter, extra);
}

return (
  <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 500 }} />
);
`;

export const resetFiltersSorters = `
import React, { useState } from "react";

import { Table, Space, Button } from "antd";

const [filteredInfo, setFilteredInfo] = useState({
  name: null,
  address: null,
});

const [sortedInfo, setSortedInfo] = useState(
  {
    order: null,
    columnKey: null,
  }
);

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
  setSortedInfo(
    {
      order: 'descend',
      columnKey: 'age',
    }
  );
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
  <>
    <Space style={{ marginBottom: 16 }}>
      <Button onClick={setAgeSort}>Sort age</Button>
      <Button onClick={clearFilters}>Clear filters</Button>
      <Button onClick={clearAll}>Clear filters and sorters</Button>
    </Space>

    <Table columns={columns} dataSource={data} onChange={handleChange} scroll={{ x: 500 }} />
  </>
);
`;

export const customizedFilterPanel = `
import React, { useState } from "react";

import Highlighter from 'react-highlight-words';
import { Table, Input, Button, Space } from "antd";
import { RiSearch2Line } from "react-icons/ri";

const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
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

const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={'Search ' + dataIndex}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<RiSearch2Line />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>

        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </Space>
    </div>
  ),
  filterIcon: filtered => <RiSearch2Line style={{ color: filtered ? '#1890ff' : undefined }} />,
  onFilter: (value, record) =>
    record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : '',
  render: text =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();

  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};

const handleReset = clearFilters => {
  clearFilters();

  setSearchText('');
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    ...getColumnSearchProps('name'),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '20%',
    ...getColumnSearchProps('age'),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ...getColumnSearchProps('address'),
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
);
`;

export const ajax = `
import React, { useEffect, useState } from "react";

import reqwest from 'reqwest';
import { Table } from "antd";

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [pagination, setPagination] = useState({
  current: 1,
  pageSize: 10,
})

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
}, [])

const handleTableChange = (pagination, filters, sorter) => {
  fetch({
    sortField: sorter.field,
    sortOrder: sorter.order,
    pagination,
    ...filters,
  });
};

const fetch = (params = {}) => {
  setLoading(true)

  reqwest({
    url: 'https://randomuser.me/api?results=200',
    method: 'get',
    type: 'json',
  }).then(data => {
    // //console.log(data);

    setLoading(false)
    setData(data.results);
    setPagination({
      ...params.pagination,
      total: 200,
      // 200 is mock data, you should read it from server
      // total: data.totalCount,
    });
  });
};

return (
  <Table
    columns={columns}
    rowKey={record => record.login.uuid}
    dataSource={data}
    pagination={pagination}
    loading={loading}
    onChange={handleTableChange}
    scroll={{ x: 800 }}
  />
);
`;

export const borderTitleFooter = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

return (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
    scroll={{ x: 500 }}
  />
);
`;

export const expandableRow = `
import { Table } from "antd";

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

return (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
    scroll={{ x: 500 }}
  />
);
`;

export const colRowSpan = `
import { Table } from "antd";

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      if (index < 4) {
        return <a>{text}</a>;
      }
      return {
        children: <a>{text}</a>,
        props: {
          colSpan: 5,
        },
      };
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: renderContent,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      // These two are merged into above cell
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: renderContent,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

return (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 500 }} />
);
`;

export const treeData = `
import React, { useState } from "react";

import { Table, Switch, Space } from "antd";

const [checkStrictly, setCheckStrictly] = useState(false);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    //console.log(selectedRowKeys, selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    //console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    //console.log(selected, selectedRows, changeRows);
  },
};

return (
  <>
    <Space align="center" style={{ marginBottom: 16 }}>
      CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
    </Space>
    
    <Table
      columns={columns}
      rowSelection={{ ...rowSelection, checkStrictly }}
      dataSource={data}
      scroll={{ x: 500 }}
    />
  </>
);
`;

export const fixedHeader = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown ' + i,
    age: 32,
    address: 'London, Park Lane no. ' + i,
  });
}

return (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 500, y: 240 }} />
);
`;

export const fixedColumns = `
import { Table } from "antd";

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
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
);
`;

export const fixedColumnsHeader = `
import { Table } from "antd";

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
    name: 'John Brown ' + i,
    age: 32,
    address: 'London, Park Lane no. ' + i,
  });
}

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
);
`;

export const groupingTableHead = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

return (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    scroll={{ x: 'calc(700px + 50%)', y: 240 }}
  />
);
`;

export const editableCells = `
import React, { useContext, useState, useEffect, useRef } from 'react';

import { Table, Input, Button, Popconfirm, Form } from "antd";

const [count, setCount] = useState(2)
const [dataSource, setDataSource] = useState([
  {
    key: '0',
    name: 'John Brown 0',
    age: '32',
    address: 'London, Park Lane no. 0',
  },
  {
    key: '1',
    name: 'John Brown 1',
    age: '32',
    address: 'London, Park Lane no. 1',
  },
])

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      // //console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: title + ' is required.',
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '30%',
    editable: true,
  },
  {
    title: 'age',
    dataIndex: 'age',
  },
  {
    title: 'address',
    dataIndex: 'address',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (_, record) =>
      dataSource.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
          <a>Delete</a>
        </Popconfirm>
      ) : null,
  },
];

const handleDelete = (key) => {
  setDataSource(dataSource.filter((item) => item.key !== key));
};

const handleAdd = () => {
  const newData = {
    key: count,
    name: 'John Brown ' + count,
    age: '32',
    address: 'London, Park Lane no. ' + count,
  };
  setDataSource([...dataSource, newData]);
  setCount(count + 1);
};

const handleSave = (row) => {
  const newData = [...dataSource];
  const index = newData.findIndex((item) => row.key === item.key);
  const item = newData[index];
  newData.splice(index, 1, { ...item, ...row });
  setDataSource(newData);
};

const components = {
  body: {
    row: EditableRow,
    cell: EditableCell,
  },
};

const columnsTable = columns.map((col) => {
  if (!col.editable) {
    return col;
  }

  return {
    ...col,
    onCell: (record) => ({
      record,
      editable: col.editable,
      dataIndex: col.dataIndex,
      title: col.title,
      handleSave: handleSave,
    }),
  };
});

return (
  <>
    <Button
      onClick={handleAdd}
      type="primary"
      style={{
        marginBottom: 16,
      }}
    >
      Add a row
    </Button>

    <Table
      components={components}
      rowClassName={() => 'editable-row'}
      bordered
      dataSource={dataSource}
      columns={columnsTable}
      scroll={{ x: 500 }}
    />
  </>
);
`;

export const editableRows = `
import React, { useState } from "react";

import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";

const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: 'John ' + i,
    age: 32,
    address: 'London Park no. ' + i,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: 'Please Input ' + title + '!',
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const [form] = Form.useForm();
const [data, setData] = useState(originData);
const [editingKey, setEditingKey] = useState('');

const isEditing = (record) => record.key === editingKey;

const edit = (record) => {
  form.setFieldsValue({
    name: '',
    age: '',
    address: '',
    ...record,
  });
  setEditingKey(record.key);
};

const cancel = () => {
  setEditingKey('');
};

const save = async (key) => {
  try {
    const row = await form.validateFields();
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      setData(newData);
      setEditingKey('');
    } else {
      newData.push(row);
      setData(newData);
      setEditingKey('');
    }
  } catch (errInfo) {
    // //console.log('Validate Failed:', errInfo);
  }
};

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    editable: true,
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    editable: true,
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    editable: true,
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (_, record) => {
      const editable = isEditing(record);
      return editable ? (
        <span>
          <a
            href="javascript:;"
            onClick={() => save(record.key)}
            style={{
              marginRight: 8,
            }}
          >
            Save
          </a>
          <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
            <a>Cancel</a>
          </Popconfirm>
        </span>
      ) : (
        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
          Edit
        </Typography.Link>
      );
    },
  },
];

const mergedColumns = columns.map((col) => {
  if (!col.editable) {
    return col;
  }

  return {
    ...col,
    onCell: (record) => ({
      record,
      inputType: col.dataIndex === 'age' ? 'number' : 'text',
      dataIndex: col.dataIndex,
      title: col.title,
      editing: isEditing(record),
    }),
  };
});

return (
  <Form form={form} component={false}>
    <Table
      components={{
        body: {
          cell: EditableCell,
        },
      }}
      bordered
      dataSource={data}
      columns={mergedColumns}
      rowClassName="editable-row"
      pagination={{
        onChange: cancel,
      }}
      scroll={{ x: 500 }}
    />
  </Form>
);
`;

export const nested = `
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { RiArrowDownLine } from "react-icons/ri";

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const expandedRowRender = () => {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Status',
      key: 'state',
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      ),
    },
    { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Space size="middle">
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown overlay={menu}>
            <a>
              More <RiArrowDownLine className="remix-icon" />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
];

const data = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

return (
  <Table
    className="components-table-demo-nested"
    columns={columns}
    expandable={{ expandedRowRender }}
    dataSource={data}
    scroll={{ x: 500 }}
  />
);
`;

export const dragSorting = `
import React, { useState, useCallback, useRef } from "react";

import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));

  return (
    <tr
      ref={ref}
      className={className + (isOver ? dropClassName : '')}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const [data, setData] = useState([
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
]);

const components = {
  body: {
    row: DraggableBodyRow,
  },
};

const moveRow = useCallback(
  (dragIndex, hoverIndex) => {
    const dragRow = data[dragIndex];
    setData(
      update(data, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRow],
        ],
      }),
    );
  },
  [data],
);

return (
  <DndProvider backend={HTML5Backend}>
    <Table
      columns={columns}
      dataSource={data}
      components={components}
      onRow={(record, index) => ({
        index,
        moveRow,
      })}
      scroll={{ x: 500 }}
    />
  </DndProvider>
);
`;

export const dragSortingHandler = `
import React, { useState } from "react";

import { Table } from "antd";
import { RiMenu2Line } from "react-icons/ri";
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const DragHandle = sortableHandle(() => <RiMenu2Line style={{ cursor: 'grab', color: '#999' }} />);

const columns = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2,
  },
];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

const [dataSource, setDataSource] = useState(data)

const onSortEnd = ({ oldIndex, newIndex }) => {
  if (oldIndex !== newIndex) {
    const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
    //console.log('Sorted items: ', newData);
    setDataSource(newData)
  }
};

const DraggableContainer = props => (
  <SortableContainer
    useDragHandle
    disableAutoscroll
    helperClass="row-dragging"
    onSortEnd={onSortEnd}
    {...props}
  />
);

const DraggableBodyRow = ({ className, style, ...restProps }) => {
  // function findIndex base on Table rowKey props and should always be a right array index
  const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
  return <SortableItem index={index} {...restProps} />;
};

return (
  <Table
    pagination={false}
    dataSource={dataSource}
    columns={columns}
    rowKey="index"
    components={{
      body: {
        wrapper: DraggableContainer,
        row: DraggableBodyRow,
      },
    }}
    scroll={{ x: 500 }}
  />
);
`;

export const ellipsisColumn = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
);
`;

export const ellipsisColumnTooltip = `
import { Table, Tooltip } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: {
      showTitle: false,
    },
    render: address => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: {
      showTitle: false,
    },
    render: address => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: {
      showTitle: false,
    },
    render: address => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: {
      showTitle: false,
    },
    render: address => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  },
];

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
);
`;

export const summary = `
import { Table, Typography } from "antd";

const { Text } = Typography;

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
  <>
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
            <Table.Summary.Cell index={1}>This is a summary content</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      scroll={{ x: 500 }}
    />
  </>
);
`;

export const virtualList = `
import React, { useState, useEffect, useRef } from "react";

import { Table } from "antd";

import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames'

function VirtualTable(props) {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns.filter(({ width }) => !width).length;
  const mergedColumns = columns.map((column) => {
    if (column.width) {
      return column;
    }

    return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
  });
  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });

  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames('virtual-table-cell', {
              'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
            })}
            style={style}
          >
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
} // Usage

const columns = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'B',
    dataIndex: 'key',
  },
  {
    title: 'C',
    dataIndex: 'key',
  },
  {
    title: 'D',
    dataIndex: 'key',
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200,
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100,
  },
];

const data = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({
    key,
  }),
);

return (
  <VirtualTable
    columns={columns}
    dataSource={data}
    scroll={{
      y: 300,
      x: '100vw',
    }}
  />
);
`;

export const responsive = `
import { Table } from "antd";

const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

return (
  <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
);
`;

export const pagination = `
import React, { useState } from "react";

import { Table, Tag, Radio, Space } from "antd";

const [top, setTop] = useState('topLeft')
const [bottom, setBottom] = useState('bottomRight')

const topOptions = [
  { label: 'topLeft', value: 'topLeft' },
  { label: 'topCenter', value: 'topCenter' },
  { label: 'topRight', value: 'topRight' },
  { label: 'none', value: 'none' },
];

const bottomOptions = [
  { label: 'bottomLeft', value: 'bottomLeft' },
  { label: 'bottomCenter', value: 'bottomCenter' },
  { label: 'bottomRight', value: 'bottomRight' },
  { label: 'none', value: 'none' },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['designer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

return (
  <>
    <div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        options={topOptions}
        value={top}
        onChange={e => {
          setTop(e.target.value)
        }}
      />
    </div>

    <Radio.Group
      style={{ marginBottom: 10 }}
      options={bottomOptions}
      value={bottom}
      onChange={e => {
        setBottom(e.target.value)
      }}
    />

    <Table
      columns={columns}
      pagination={{ position: [top, bottom] }}
      dataSource={data}
      scroll={{ x: 500 }}
    />
  </>
);
`;

export const fixedHeaderScrollbarPage = `
import React, { useState } from "react";

import { Table, Switch } from "antd";

const [fixedTop, setFixedTop] = useState(false)

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
);
`;

export const tableSize = `
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

return (
  <>
    <h4>Middle size table</h4>
    <Table columns={columns} dataSource={data} size="middle" scroll={{ x: 500 }} />

    <h4>Small size table</h4>
    <Table columns={columns} dataSource={data} size="small" scroll={{ x: 500 }} />
  </>
);
`;

export const dynamicSettings = `
import React, { useState } from "react";

import { Table, Switch, Radio, Form, Space } from 'antd';

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
    description: 'My name is John Brown, I am ' + i + '2 years old, living in New York No. ' + i + ' Lake Park.',
  });
}

const defaultExpandable = { expandedRowRender: record => <p>{record.description}</p> };
const pagination = { position: 'bottom' };
const defaultTitle = 'Here is title';
const defaultFooter = 'Here is footer';

const [xScroll, setXScroll] = useState()
const [yScroll, setYScroll] = useState()
const [ellipsis, setEllipsis] = useState()
const [expandable, setExpandable] = useState(defaultExpandable)
const [bordered, setBordered] = useState(false)
const [loading, setLoading] = useState(false)
const [size, setSize] = useState('default')
const [title, setTitle] = useState(defaultTitle)
const [showHeader, setShowHeader] = useState(true)
const [footer, setFooter] = useState(defaultFooter)
const [rowSelection, setRowSelection] = useState({})
const [hasData, setHasData] = useState(true)
const [tableLayout, setTableLayout] = useState()
const [top, setTop] = useState('none')
const [bottom, setBottom] = useState('bottomRight')

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
  if (prop == "bordered") {
    setBordered(enable);
  } else if (prop == "loading") {
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
  setTitle(enable ? defaultTitle : '')
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
  <>
    <Form
      layout="inline"
      className="components-table-demo-control-bar"
      style={{ marginBottom: 16 }}
    >
      <Row gutter={[8, 16]}>
        <Col>
          <Form.Item label="Bordered">
            <Switch checked={bordered} onChange={handleToggle('bordered')} />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item label="loading">
            <Switch checked={loading} onChange={handleToggle('loading')} />
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
            <Switch checked={!!expandable} onChange={handleExpandChange} />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item label="Checkbox">
            <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
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
            <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
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
            <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
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
                setTop(e.target.value)
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
                setBottom(e.target.value)
              }}
            >
              <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
              <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
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
  </>
);
`;
