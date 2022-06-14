export const basic = `
import { InputNumber } from "antd";

function onChange(value) {
  //console.log('changed', value);
}

return (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
);
`;

export const disable = `
import React, { useState } from "react";

import { InputNumber, Button } from "antd";

const [disabled, setDisabled] = useState(true)

const toggle = () => {
  setDisabled(!disabled);
};

return (
  <>
    <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />

    <Button onClick={toggle} type="primary">
      Toggle disabled
    </Button>
  </>
);
`;

export const sizes = `
import { InputNumber } from "antd";

function onChange(value) {
  //console.log("changed", value);
}

return (
  <>
    <InputNumber
      size="large"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />

    <InputNumber
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />

    <InputNumber
      size="small"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
  </>
);
`;
