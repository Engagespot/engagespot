export const basic = `
import { Switch } from "antd";

function onChange(checked) {
  //console.log("switch to", checked);
}

return (
  <Switch defaultChecked onChange={onChange} />
);
`;

export const disable = `
import React, { useState } from "react";

import { Switch, Button } from "antd";

const [disabled, setDisabled] = useState(true);

const toggle = () => {
  setDisabled(!disabled);
};

return (
  <>
    <Switch className="da-mb-16" disabled={disabled} defaultChecked />
    
    <Button type="primary" onClick={toggle}>
      Toggle disabled
    </Button>
  </>
);
`;

export const loading = `
import React, { useState } from "react";

import { Switch, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const [disabled, setDisabled] = useState(true);

const toggle = () => {
  setDisabled(!disabled);
};

return (
  <>
    <Switch loading defaultChecked className="da-mb-16" />

    <br />

    <Switch size="small" loading />
  </>
);
`;

export const sizes = `
import React, { useState } from "react";

import { Switch, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const [disabled, setDisabled] = useState(true);

const toggle = () => {
  setDisabled(!disabled);
};

return (
  <>
    <Switch defaultChecked className="da-mb-16" />

    <br />

    <Switch size="small" defaultChecked />
  </>
);
`;

export const texticon = `
import React, { useState } from "react";

import { Switch, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const [disabled, setDisabled] = useState(true);

const toggle = () => {
  setDisabled(!disabled);
};

return (
  <>
    <Switch
      checkedChildren="On"
      unCheckedChildren="Off"
      defaultChecked
      className="da-mb-16"
    />
    
    <br />
    
    <Switch
      checkedChildren="On"
      className="da-mb-16"
      unCheckedChildren="Off"
    />
    
    <br />
    
    <Switch
      checkedChildren={<CloseOutlined />}
      unCheckedChildren={<CheckOutlined />}
      defaultChecked
    />
  </>
);
`;
