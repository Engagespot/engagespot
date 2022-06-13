export const basic = `
import { Input } from "antd";

return (
  <Input placeholder="Placeholder text" />
);
`;

export const prefixsuffix = `
import { Input, Tooltip } from "antd";
import { RiInformationLine} from "react-icons/ri";
import { User } from 'react-iconly';

return (
  <>
    <Input
      placeholder="Enter your username"
      prefix={<User set="curved" className="remix-icon" size={16}/>}
      suffix={
        <Tooltip title="Extra information">
          <RiInformationLine className="remix-icon" />
        </Tooltip>
      }
    />

    <Input prefix="$" suffix="RMB" />

    <Input prefix="$" suffix="RMB" disabled />
  </>
);
`;

export const preposttab = `
import { Input, Select } from "antd";
import {  RiSettings3Line, RiSearchLine } from "react-icons/ri";
import { User } from 'react-iconly';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);

const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

return (
  <>
    <Input
      addonBefore="http://"
      addonAfter=".com"
      defaultValue="mysite"
    />

    <Input
      addonBefore={selectBefore}
      addonAfter={selectAfter}
      defaultValue="mysite"
      disabled
    />

    <Input prefix={<User set="curved" className="remix-icon" size={16}/>} suffix={<RiSearchLine className="remix-icon" />} addonAfter={<RiSettings3Line className="remix-icon" />} placeholder="Placeholder Text" />

    <Input addonBefore="http://" suffix={<RiSearchLine className="remix-icon" />} placeholder="Placeholder Text" />
  </>
);
`;

export const searchbox = `
import { Input } from "antd";
import { RiMicLine } from "react-icons/ri";

const { Search } = Input;

const suffix = (
  <RiMicLine
    className="remix-icon"
  />
);

const onSearch = value => //console.log(value);
  
return (
  <>
    <Search
      className="da-mb-24"
      placeholder="input search text"
      onSearch={onSearch}
    />

    <Search
      className="da-mb-24"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
    />

    <Search
      className="da-mb-24"
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
    />

    <Search
      className="da-mb-24"
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    
    <Search
      className="da-mb-24"
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </>
);
`;

export const textarea = `
import { Input } from "antd";

const { TextArea } = Input;

return (
  <TextArea rows={4} placeholder="Pleaceholder Text" />
);
`;

export const textareacounting = `
import { Input } from "antd";

const { TextArea } = Input;

const onChange = (e) => {
  //console.log("Change:", e.target.value);
};

return (
  <TextArea
    rows={4}
    placeholder="Pleaceholder Text"
    showCount
    maxLength={100}
    onChange={onChange}
  />
);
`;

export const sizes = `
import React, { useState } from "react";

import { Input } from "antd";
import { User } from 'react-iconly';

return (
  <>
    <Input
      size="large"
      placeholder="Large"
      prefix={<User set="curved" className="remix-icon" size={16}/>}
    />

    <Input
      placeholder="Default"
      prefix={<User set="curved" className="remix-icon" size={16}/>}
    />

    <Input
      size="small"
      placeholder="Small"
      prefix={<User set="curved" className="remix-icon" size={16}/>}
    />
  </>
);
`;
