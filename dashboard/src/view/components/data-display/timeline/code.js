export const basic = `
import { Timeline } from "antd";

return (
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);
`;

export const alternate = `
import {  Timeline } from "antd";

return (
  <Timeline mode="alternate">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>

    <Timeline.Item color="green">
      Solve initial network problems 2015-09-01
    </Timeline.Item>

    <Timeline.Item dot={<i className="ri-time-line ri-lg" />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </Timeline.Item>

    <Timeline.Item color="red">
      Network problems being solved 2015-09-01
    </Timeline.Item>

    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>

    <Timeline.Item dot={<i className="ri-time-line ri-lg" />}>
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>
);
`;

export const label = `
import React, { useState } from "react";

import { Radio, Timeline } from "antd";

const [mode, setMode] = useState("left");

const onChange = (e) => {
  setMode(e.target.value);
};

return (
  <>
    <Radio.Group onChange={onChange} value={mode} className="da-mb-24">
      <Radio value="left">Left</Radio>
      <Radio value="right">Right</Radio>
      <Radio value="alternate">Alternate</Radio>
    </Radio.Group>

    <Timeline mode={mode}>
      <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
      
      <Timeline.Item label="2015-09-01 09:12:11">
        Solve initial network problems
      </Timeline.Item>
      
      <Timeline.Item>Technical testing</Timeline.Item>
      
      <Timeline.Item label="2015-09-01 09:12:11">
        Network problems being solved
      </Timeline.Item>
    </Timeline>
  </>
);
`;
