export const basic = `
import { Steps } from "antd";

const { Step } = Steps;

return (
  <div className="da-overflow-scroll da-scrollbar-x-hidden">
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />

      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />

      <Step title="Waiting" description="This is a description." />
    </Steps>
  </div>
);
`;

export const customized = `
import { Steps } from "antd";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Step: {index} Status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

return (
  <div className="da-overflow-scroll da-scrollbar-x-hidden">
    <Steps current={1} progressDot={customDot}>
      <Step title="Finished" description="You can hover on the dot." />
      <Step title="In Progress" description="You can hover on the dot." />
      <Step title="Waiting" description="You can hover on the dot." />
      <Step title="Waiting" description="You can hover on the dot." />
    </Steps>
  </div>
);
`;

export const dotStyle = `
import { Divider, Steps } from "antd";

const { Step } = Steps;

return (
  <div className="da-overflow-scroll da-scrollbar-x-hidden">
    <Steps progressDot current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>

    <Divider />

    <div className="da-pl-4">
      <Steps progressDot current={1} direction="vertical">
        <Step
          title="Finished"
          description="This is a description. This is a description."
        />
        <Step
          title="Finished"
          description="This is a description. This is a description."
        />
        <Step
          title="In Progress"
          description="This is a description. This is a description."
        />
        <Step title="Waiting" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  </div>
);
`;

export const errorStatus = `
import { Steps } from "antd";

const { Step } = Steps;

return (
  <div className="da-overflow-scroll da-scrollbar-x-hidden">
    <Steps current={1} status="error">
      <Step title="Finished" description="This is a description" />
      <Step title="In Process" description="This is a description" />
      <Step title="Waiting" description="This is a description" />
    </Steps>
  </div>
);
`;

export const miniVersion = `
import { Steps } from "antd";

const { Step } = Steps;

return (
  <div className="da-overflow-scroll da-scrollbar-x-hidden">
    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
  </div>
);
`;

export const switchStep = `
import React, { useState } from "react";

import { Button, Steps } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const [current, setCurrent] = useState(0);

const next = () => {
  setCurrent(current + 1);
};

const prev = () => {
  setCurrent(current - 1);
};

return (
  <>
    <div className="da-overflow-scroll da-scrollbar-x-hidden">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
    </div>

    <div className="da-border-radius-sm da-border-dashed da-bg-color-black-20 da-text-center da-p-120 da-mt-16 da-border-1">
      {steps[current].content}
    </div>

    <div className="da-mt-24">
      {current < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Next
        </Button>
      )}

      {current === steps.length - 1 && (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      )}

      {current > 0 && (
        <Button className="da-mx-8" onClick={() => prev()}>
          Previous
        </Button>
      )}
    </div>
  </>
);
`;

export const vertical = `
import { Steps } from "antd";

const { Step } = Steps;

return (
  <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
);
`;

export const verticalMini = `
import { Steps } from "antd";

const { Step } = Steps;

return (
  <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
);
`;

export const withIcon = `
import { Steps } from "antd";

const { Step } = Steps;

return (
  <div className="da-overflow-scroll da-scrollbar-x-hidden">
    <Steps>
      <Step
        status="finish"
        title="Login"
        icon={
          <span className="remix-icon">
            <i className="ri-user-line" />
          </span>
        }
      />
      <Step
        status="process"
        title="Pay"
        icon={
          <span className="remix-icon  anticon-loading anticon-spin">
            <i className="ri-loader-5-line" />
          </span>
        }
      />

      <Step
        status="wait"
        title="Done"
        icon={
          <span className="remix-icon">
            <i className="ri-user-smile-line" />
          </span>
        }
      />
    </Steps>
  </div>
);
`;
