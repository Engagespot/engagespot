export const normal = `
import { Button, message } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";

const info = () => {
  message.info({
    content: "This is a normal message",
    icon: <RiErrorWarningLine className="remix-icon" />,
  });
};

return (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
);
`;

export const types = `
import { Button, message } from "antd";
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
} from "react-icons/ri";

const success = () => {
  message.success({
    content: "This is a success message",
    icon: <RiCheckboxCircleLine className="remix-icon" />,
  });
};

const error = () => {
  message.error({
    content: "This is an error message",
    icon: <RiCloseCircleLine className="remix-icon" />,
  });
};

const warning = () => {
  message.warning({
    content: "This is a warning message",
    icon: <RiErrorWarningLine className="remix-icon" />,
  });
};

return (
  <>
    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={success}
    >
      Success
    </Button>
    
    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={error}
    >
      Error
    </Button>
    
    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={warning}
    >
      Warning
    </Button>
  </>
);
`;

export const duration = `
import { Button, message } from "antd";
import { RiCheckboxCircleLine } from "react-icons/ri";

const success = () => {
  message.success({
    content:
      "This is a prompt message for success, and it will disappear in 10 seconds",
    icon: <RiCheckboxCircleLine className="remix-icon" />,
    duration: 10,
  });
};

return (
  <Button type="primary" ghost onClick={success}>
    Customized display duration
  </Button>
);
`;

export const loading = `
import { Button, message } from "antd";

const success = () => {
  const hide = message.loading("Action in progress..", 0);
  setTimeout(hide, 2500);
};

return (
  <Button type="primary" ghost onClick={success}>
    Display a loading indicator
  </Button>
);
`;
