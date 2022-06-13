export const basic = `
import { Popconfirm, message } from "antd";
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
} from "react-icons/ri";

function confirm() {
  message.success({
    content: "Click on Yes",
    icon: <RiCheckboxCircleLine className="remix-icon" />,
  });
}

function cancel() {
  message.error({
    content: "Click on No",
    icon: <RiCloseCircleLine className="remix-icon" />,
  });
}

return (
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
    icon={
      <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
    }
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
`;

export const placement = `
import { Button, Popconfirm, message } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";

const text = "Are you sure to delete this task?";

function confirm() {
  message.info({
    content: "Clicked on Yes.",
    icon: <RiErrorWarningLine className="remix-icon" />,
  });
}

return (
  <div className="da-placement">
    <div style={{ marginLeft: 90, whiteSpace: "nowrap" }}>
      <Popconfirm
        placement="topLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">TL</Button>
      </Popconfirm>
      
      <Popconfirm
        placement="top"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">Top</Button>
      </Popconfirm>

      <Popconfirm
        placement="topRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">TR</Button>
      </Popconfirm>
    </div>

    <div style={{ width: 90, float: "left" }}>
      <Popconfirm
        placement="leftTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">LT</Button>
      </Popconfirm>

      <Popconfirm
        placement="left"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">Left</Button>
      </Popconfirm>

      <Popconfirm
        placement="leftBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">LB</Button>
      </Popconfirm>
    </div>

    <div style={{ width: 90, marginLeft: 358 }}>
      <Popconfirm
        placement="rightTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">RT</Button>
      </Popconfirm>

      <Popconfirm
        placement="right"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">Right</Button>
      </Popconfirm>

      <Popconfirm
        placement="rightBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">RB</Button>
      </Popconfirm>
    </div>

    <div
      style={{ marginLeft: 90, clear: "both", whiteSpace: "nowrap" }}
    >
      <Popconfirm
        placement="bottomLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">BL</Button>
      </Popconfirm>

      <Popconfirm
        placement="bottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">Bottom</Button>
      </Popconfirm>

      <Popconfirm
        placement="bottomRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <Button type="primary">BR</Button>
      </Popconfirm>
    </div>
  </div>
);
`;

export const trigger = `
import React, { useState } from "react";

import { Popconfirm, Switch, message } from "antd";
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
} from "react-icons/ri";

const [visible, setVisible] = useState(false);
const [condition, setCondition] = useState(true);

const changeCondition = (value) => {
  setCondition(value);
};

function confirm() {
  message.success({
    content: "Next step.",
    icon: <RiCheckboxCircleLine className="remix-icon" />,
  });
}

function cancel() {
  message.error({
    content: "Click on cancel",
    icon: <RiCloseCircleLine className="remix-icon" />,
  });
}

const handleVisibleChange = (visible) => {
  if (!visible) {
    setVisible(visible);
    return;
  }

  if (condition) {
    confirm();
  } else {
    setVisible(visible);
  }
};

return (
  <>
    <Popconfirm
      title="Are you sure delete this task?"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      icon={
        <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
      }
    >
      <a href="#">Delete a task</a>
    </Popconfirm>

    <div className="da-mt-16">
      Whether directly execute：
      <Switch defaultChecked onChange={changeCondition} />
    </div>
  </>
);
`;

export const async = `
import React, { useState } from "react";

import { Button, Popconfirm } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";

const [visible, setVisible] = useState(false);
const [confirmLoading, setConfirmLoading] = useState(false);

const showPopconfirm = () => {
  setVisible(true);
};

const handleOk = () => {
  setConfirmLoading(true);
  
  setTimeout(() => {
    setVisible(false);
    setConfirmLoading(false);
  }, 2000);
};

const handleCancel = () => {
  setVisible(false);
};

return (
  <Popconfirm
    title="Title"
    visible={visible}
    onConfirm={handleOk}
    okButtonProps={{ loading: confirmLoading }}
    onCancel={handleCancel}
    icon={
      <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
    }
  >
    <Button type="primary" onClick={showPopconfirm}>
      Open Popconfirm with br async logic
    </Button>
  </Popconfirm>
);
`;

export const icon = `
import { Popconfirm } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";

return (
  <Popconfirm
    title="Are you sure？"
    icon={
      <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
    }
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
`;
