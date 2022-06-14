export const basic = `
import { Slider } from "antd";

return (
  <Slider defaultValue={30} />

  <Slider className="da-mt-48" range defaultValue={[10, 70]} />
);
`;

export const graduated = `
import React, { useState } from "react";

import { Slider } from "antd";

const [marks, setMarks] = useState({
  0: "0",
  30: "8",
  70: "16",
  100: "24",
});

return (
  <Slider className="da-mx-4" marks={marks} defaultValue={50} />

  <Slider
    marks={marks}
    className="da-mt-48 da-mx-4"
    range
    defaultValue={[10, 70]}
  />
);
`;

export const icon = `
import React, { useState } from "react";

import { Slider } from "antd";
import { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";

export default function IconItem(props) {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  const { max, min } = props;
  const mid = ((max - min) / 2).toFixed(5);
  const nextColorCls = value >= mid ? "" : "icon-wrapper-active";
  const preColorCls = value >= mid ? "icon-wrapper-active" : "";

  return (
    <div className="da-slider-icon-wrapper">
      <RiThumbDownLine className={preColorCls} />
      <Slider {...props} onChange={handleChange} value={value} />
      <RiThumbUpLine className={nextColorCls} />
    </div>
  );
}

return (
  <IconItem min={0} max={20} />
);
`;
