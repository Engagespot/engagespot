export const buttonTypes = `
import { Button } from "antd";

return (
  <Button type="primary">Primary Button</Button>
  <Button>Default Button</Button>
  <Button type="dashed">Dashed Button</Button>
  <Button type="text">Text Button</Button>
  <Button type="link">Link Button</Button>
);
`;

export const buttonSizes = `
import React, { useState } from "react";

import { Button, Radio } from "antd";
import {
  RiDownload2Line,
  RiArrowRightSLine,
} from "react-icons/ri";

const [size, setSize] = useState('large')

const handleSizeChange = (e) => {
  setSize(e.target.value);
};

return (
  <Radio.Group value={size} onChange={handleSizeChange}>
    <Radio.Button value="large">Large</Radio.Button>
    <Radio.Button value="default">Default</Radio.Button>
    <Radio.Button value="small">Small</Radio.Button>
  </Radio.Group>

  <Button type="primary" size={size}>Primary</Button>
  <Button size={size}>Default</Button>
  <Button type="dashed" size={size}>Dashed</Button>
  <Button type="link" size={size}>Link</Button>

  <Button
    type="primary" 
    icon={<RiDownload2Line className="remix-icon" />} 
    size={size}
  />

  <Button
    type="primary"
    shape="circle"
    icon={<RiArrowRightSLine className="remix-icon" />}
    size={size}
  />

  <Button
    type="primary"
    shape="round"
    icon={<RiDownload2Line  className="remix-icon"/>}
    size={size}
  />

  <Button
    type="primary"
    shape="round"
    icon={<RiDownload2Line className="remix-icon" />}
    size={size}
  >
    Download
  </Button>

  <Button icon={<RiDownload2Line className="remix-icon" />} size={size}>Download</Button>
);
`;

export const dangerButton = `
import { Button } from "antd";

return (
  <Button type="primary" danger>Primary</Button>
  <Button danger>Default</Button>
  <Button type="dashed" danger>Dashed</Button>
  <Button type="text" danger>Text</Button>
  <Button type="link" danger>Link</Button>
);
`;

export const disabledButton = `
import { Button } from "antd";

return (
  <Button type="primary">Primary</Button>
  <Button type="primary" disabled>Primary(disabled)</Button>
  <Button>Default</Button>
  <Button disabled>Default(disabled)</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="dashed" disabled>Dashed(disabled)</Button>
  <Button type="text">Text</Button>
  <Button type="text" disabled>Text(disabled)</Button>
  <Button type="link">Link</Button>
  <Button type="link" disabled>Link(disabled)</Button>
  <Button danger>Danger Default</Button>
  <Button danger disabled>Danger Default(disabled)</Button>
  <Button danger type="text">Danger Text</Button>
  <Button  danger type="text" disabled>Danger Text(disabled)</Button>
  <Button type="link" danger>Danger Link</Button>
  <Button type="link" danger disabled>Danger Link(disabled)</Button>
  <Button ghost>Ghost</Button>
  <Button ghost disabled>Ghost(disabled)</Button>
);
`;

export const ghostButton = `
import { Button } from "antd";

return (
  <Button type="primary" ghost>Primary</Button>
  <Button ghost>Default</Button>
  <Button type="dashed" ghost>Dashed</Button>
);
`;

export const iconButton = `
import { Button, Tooltip } from "antd";
import { RiSearchLine } from "react-icons/ri";

return (
  <Tooltip title="search">
    <Button
      type="primary"
      shape="circle"
      icon={<RiSearchLine className="remix-icon" />}
    />
  </Tooltip>
  
  <Button type="primary" shape="circle">Y</Button>
  
  <Button
    type="primary"
    icon={<RiSearchLine className="remix-icon" />}
  >
    Search
  </Button>
  
  <Tooltip title="search">
    <Button
      shape="circle"
      icon={<RiSearchLine className="remix-icon" />}
    />
  </Tooltip>
  
  <Button
    icon={<RiSearchLine className="remix-icon"/>}
  >
    Search
  </Button>
  
  <Tooltip title="search">
    <Button
      shape="circle"
      icon={<RiSearchLine className="remix-icon" />}
    />
  </Tooltip>
  
  <Button
    icon={<RiSearchLine className="remix-icon" />}
  >
    Search
  </Button>
  
  <Tooltip title="search">
    <Button
      type="dashed"
      shape="circle"
      icon={<RiSearchLine className="remix-icon" />}
    />
  </Tooltip>
  
  <Button
    type="dashed"
    icon={<RiSearchLine className="remix-icon" />}
  >
    Search
  </Button>
);
`;
