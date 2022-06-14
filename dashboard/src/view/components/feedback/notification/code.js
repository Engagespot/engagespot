export const basic = `
import { Button, notification } from "antd";
import { RiCloseFill } from "react-icons/ri";

const openNotification = () => {
  notification.open({
    message: "Primary",
    description: "Primary message.",
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  });
};

return (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
`;

export const icon = `
import { Button, notification } from "antd";
import {
  RiCloseFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
} from "react-icons/ri";

const openSuccessNotification = () => {
  notification.open({
    message: "Success",
    description: "Success message.",
    icon: <RiCheckboxCircleFill style={{ color: "#00F7BF" }} />,
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  });
};

const openInfoNotification = () => {
  notification.open({
    message: "Info",
    description: "Info message.",
    icon: <RiErrorWarningFill style={{ color: "#1BE7FF" }} />,
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  });
};

const openWarningNotification = () => {
  notification.open({
    message: "Warning",
    description: "Warning message.",
    icon: <RiErrorWarningFill style={{ color: "#FFC700" }} />,
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  });
};

const openErrorNotification = () => {
  notification.open({
    message: "Error",
    description: "Error message.",
    icon: <RiErrorWarningFill style={{ color: "#FF0022" }} />,
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  });
};

return (
  <Button
    type="success"
    ghost
    onClick={openSuccessNotification}
  >
    Success
  </Button>

  <Button
    type="info"
    ghost
    onClick={openInfoNotification}
  >
    Info
  </Button>

  <Button
    type="warning"
    ghost
    onClick={openWarningNotification}
  >
    Warning
  </Button>

  <Button
    type="error"
    ghost
    onClick={openErrorNotification}
  >
    Error
  </Button>
);
`;

export const duration = `
import { Button, notification } from "antd";
import { RiCloseFill } from "react-icons/ri";

const openNotification = () => {
  const args = {
    message: "Primary",
    description: "Primary message.",
    duration: 0,
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  };
  notification.open(args);
};

return (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
`;

export const customClose = `
import { Button, notification } from "antd";
import { RiCloseFill } from "react-icons/ri";

const close = () => {};

const openNotification = () => {
  const key = 'open' + Date.now(); 
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => notification.close(key)}
    >
      Confirm
    </Button>
  );
  notification.open({
    message: "Notification Title",
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
    onClose: close,
  });
};

return (
  <Button type="primary" ghost onClick={openNotification}>
    Open the notification box
  </Button>
);
`;
