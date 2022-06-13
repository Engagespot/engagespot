export const basic = `
import { Radio } from "antd";

return (
  <Radio>Radio</Radio>
);
`;

export const sizes = `
import React, { useState } from "react";

import { Radio, Space } from "antd";

return (
  <Space direction="vertical">
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b">London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>

    <Radio.Group defaultValue="a" className="da-mt-16">
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b">London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>

    <Radio.Group defaultValue="a" size="small" className="da-mt-16">
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b">London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>
  </Space>
);
`;

export const solid = `
import React, { useState } from "react";

import { Radio, Space } from "antd";

return (
  <Space direction="vertical">
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b">London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>

    <Radio.Group
      defaultValue="c"
      buttonStyle="solid"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b" disabled>London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>
  </Space>
);
`;

export const style = `
import React, { useState } from "react";

import { Radio, Space } from "antd";

function onChange(e) {
  //console.log("radio checked:", e.target.value);
}

return (
  <Space direction="vertical"> 
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b">London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>

    <Radio.Group
      onChange={onChange}
      defaultValue="a"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b" disabled>London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>

    <Radio.Group
      disabled
      onChange={onChange}
      defaultValue="a"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">Istanbul</Radio.Button>
      <Radio.Button value="b">London</Radio.Button>
      <Radio.Button value="c">Berlin</Radio.Button>
      <Radio.Button value="d">Paris</Radio.Button>
    </Radio.Group>
  </Space>
);
`;

export const group = `
import React, { useState } from "react";

import { Radio } from "antd";

const [value, setValue] = useState(1);

const onChange = (e) => {
  //console.log("radio checked", e.target.value);
  setValue(e.target.value);
};

return (
  <Radio.Group onChange={onChange} value={value}>
    <Radio value={1}>Radio</Radio>
    <Radio value={2}>Radio</Radio>
    <Radio value={3}>Radio</Radio>
    <Radio value={4}>Radio</Radio>
  </Radio.Group>
);
`;

export const groupvertical = `
import React, { useState } from "react";

import { Radio, Space } from "antd";

const [value, setValue] = useState(1);

const onChange = (e) => {
  //console.log("radio checked", e.target.value);
  setValue(e.target.value);
};

return (
  <Radio.Group onChange={onChange} value={value}>
    <Space direction="vertical">
      <Radio value={1}>Radio</Radio>
      <Radio value={2}>Radio</Radio>
      <Radio value={3}>Radio</Radio>
      <Radio value={4}>
        More...
        {value === 4 ? (
          <Input size="small" style={{ width: 100, marginLeft: 10 }} />
        ) : null}
      </Radio>
    </Space>
  </Radio.Group>
);
`;

export const disable = `
import React, { useState } from "react";

import { Radio } from "antd";

const [disabled, setDisabled] = useState(true);

const toggleDisabled = () => {
  setDisabled(!disabled);
};
    
return (
  <>
    <Radio defaultChecked={false} disabled={disabled}>
      Disabled
    </Radio>

    <Radio defaultChecked disabled={disabled}>
      Disabled
    </Radio>

    <Button className="da-mt-16" type="primary" onClick={toggleDisabled}>
      Toggle disabled
    </Button>
  </>
);
`;
