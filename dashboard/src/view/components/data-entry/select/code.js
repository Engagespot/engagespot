export const basic = `
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  //console.log("selected", value);
}

return (
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>

    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>

    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>

    <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
);
`;

export const searchField = `
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  //console.log("selected", value);
}

function onBlur() {
  //console.log("blur");
}

function onFocus() {
  //console.log("focus");
}

function onSearch(val) {
  //console.log("search:", val);
}

return (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
);
`;

export const multipleSelection = `
import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  //console.log("selected", value);
}

return (
  <>
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
    </Select>

    <br />

    <Select
      mode="multiple"
      disabled
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
    </Select>
  </>
);
`;

export const sizes = `
import React, { useState } from "react";

import { Select, Radio } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  //console.log("selected", value);
}

const SelectSizesDemo = () => {
  const [size, setSize] = React.useState('default');

  const handleSizeChange = e => {
    setSize(e.target.value);
  };
}

return (
  <>
    <Radio.Group value={size} onChange={handleSizeChange}>
      <Radio.Button value="large">Large</Radio.Button>
      <Radio.Button value="default">Default</Radio.Button>
      <Radio.Button value="small">Small</Radio.Button>
    </Radio.Group>

    <br />
    <br />

    <Select size={size} defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
      {children}
    </Select>

    <br />

    <Select
      mode="multiple"
      size={size}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {children}
    </Select>

    <br />

    <Select
      mode="tags"
      size={size}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {children}
    </Select>
  </>
);
`;

export const customSelection = `
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  //console.log("selected", value);
}

return (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>

    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </div>
    </Option>

    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </div>
    </Option>

    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </div>
    </Option>
  </Select>
);
`;

export const searchSort = `
import { Select } from 'antd';

const { Option } = Select;

return (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select>
);
`;

export const tags = `
import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  //console.log("selected", value);
}

return (
  <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
    {children}
  </Select>
);
`;

export const optionGroup = `
import { Select } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  //console.log("selected", value);
}

return (
  <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>
);
`;

export const coordinate = `
import React, { useState } from "react";

import { Select } from 'antd';

const { Option } = Select;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const [cities, setCities] = useState(cityData[provinceData[0]]);
const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

const handleProvinceChange = value => {
  setCities(cityData[value]);
  setSecondCity(cityData[value][0]);
};

const onSecondCityChange = value => {
  setSecondCity(value);
};

return (
  <>
    <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
      {provinceData.map(province => (
        <Option key={province}>{province}</Option>
      ))}
    </Select>
    
    <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
      {cities.map(city => (
        <Option key={city}>{city}</Option>
      ))}
    </Select>
  </>
);
`;

export const searchBox = `
import React, { useState } from "react";

import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

const { Option } = Select;

const [data, setData] = useState([])
const [value, setValue] = useState(undefined)
let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp('https://suggest.taobao.com/sug?' + str)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

const handleSearch = value => {
  if (value) {
    fetch(value, data => setData(data));
  } else {
    setData([]);
  }
};

const handleChange = value => {
  setValue({ value });
};

const options = data.map(d => <Option key={d.value}>{d.text}</Option>);

return (
  <Select
    showSearch
    value={value}
    placeholder="input search text"
    style={{ width: 200 }}
    defaultActiveFirstOption={false}
    showArrow={false}
    filterOption={false}
    onSearch={handleSearch}
    onChange={handleChange}
    notFoundContent={null}
  >
    {options}
  </Select>
);
`;

export const selectedItem = `
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  //console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

return (
  <Select
    labelInValue
    defaultValue={{ value: 'lucy' }}
    style={{ width: 120 }}
    onChange={handleChange}
  >
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>
);
`;

export const automaticTokenization = `
import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  //console.log('selected', value);
}

return (
  <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
    {children}
  </Select>
);
`;

export const searchSelectUsers = `
import React, { useState } from "react";

import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;

const [value, setValue] = useState([]);

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const fetchRef = React.useRef(0);
  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
} // Usage of DebounceSelect

async function fetchUserList(username) {
  //console.log('fetching user', username);
  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: user.name.first + ' ' + user.name.last,
        value: user.login.username,
      })),
    );
}

return (
  <DebounceSelect
    mode="multiple"
    value={value}
    placeholder="Select users"
    fetchOptions={fetchUserList}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    style={{
      width: '100%',
    }}
  />
);
`;

export const customDropdown = `
import React, { useState } from "react";

import { Select, Divider, Input } from 'antd';

const { Option } = Select;

const [items, setItems] = useState(['jack', 'lucy'])
const [name, setName] = useState('')
let index = 0;

const onNameChange = event => {
  setName(event.target.value);
};

const addItem = () => {
  setItems([...items, name || 'New item ' + index++]);
  setName('');
};

return (
  <Select
    style={{ width: 240 }}
    placeholder="custom dropdown render"
    dropdownRender={menu => (
      <div>
        {menu}
        <Divider style={{ margin: '4px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', padding: 8 }}>
          <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
          <a
            style={{ flex: 'none', padding: '8px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={addItem}
          >
            <RiAddLine className="da-remix-icon" /> Add item
          </a>
        </div>
      </div>
    )}
  >
    {items.map(item => (
      <Option key={item}>{item}</Option>
    ))}
  </Select>
);
`;

export const hideSelected = `
import React, { useState } from "react";

import { Select } from 'antd';

const [selectedItems, setSelectedItems] = useState([])
const options = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const handleChange = selectedItems => {
  setSelectedItems(selectedItems);
};

const filteredOptions = options.filter(o => !selectedItems.includes(o));

return (
  <Select
    mode="multiple"
    placeholder="Inserted are removed"
    value={selectedItems}
    onChange={handleChange}
    style={{ width: '100%' }}
  >
    {filteredOptions.map(item => (
      <Select.Option key={item} value={item}>
        {item}
      </Select.Option>
    ))}
  </Select>
);
`;

export const borderedLess = `
import { Select } from 'antd';

const { Option } = Select;

return (
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>

    <Select defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
);
`;

export const customTagRender = `
import { Select, Tag } from 'antd';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

return (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  />
);
`;

export const responsive = `
import React, { useState } from "react";

import { Select, Space } from 'antd';

const options = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: 'Long Label: ' + value,
    value,
  });
}

const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);

const selectProps = {
  mode: 'multiple',
  style: {
    width: '100%',
  },
  value,
  options,
  onChange: (newValue) => {
    setValue(newValue);
  },
  placeholder: 'Select Item...',
  maxTagCount: 'responsive',
};

return (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    >
    <Select {...selectProps} />
    <Select {...selectProps} disabled />
  </Space>
);
`;

export const bigData = `
import { Select, Typography, Divider } from 'antd';

const { Title } = Typography;

const options = [];
  
for (let i = 0; i < 100000; i++) {
  const value = i.toString(36) + '' + i;
  options.push({
    value,
    disabled: i === 10,
  });
}

function handleChange(value) {
  //console.log('selected', value);
}

return (
  <>
    <Title level={3}>Ant Design 4.0</Title>
    <Title level={4}>{options.length} Items</Title>
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />

    <Divider />

    <Title level={3}>Ant Design 3.0</Title>
    <iframe
      title="Ant Design 3.0 Select demo"
      src="https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      style={{ width: '100%', height: 300 }}
    />
  </>
);
`;
