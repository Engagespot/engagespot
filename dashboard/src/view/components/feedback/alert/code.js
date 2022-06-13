export const basic = `
import { Alert } from "antd";

return (
  <Alert
    message="Success Alert - Lorem ipsum dolor sit amet,"
    type="success"
  />
);
`;

export const more = `
import { Alert } from "antd";

return (
  <>
    <Alert message="Success Text" type="success" />
    <Alert className="da-mt-16" message="Info Text" type="info" />
    <Alert className="da-mt-16" message="Warning Text" type="warning" />
    <Alert className="da-mt-16" message="Danger Text" type="error" />
  </>
);
`;

export const closable = `
import { Alert } from "antd";

function onClose() {}

return (
  <>
    <Alert
      message="Success Text"
      type="success"
      closable
      onClose={onClose}
    />

    <Alert
      className="da-mt-16"
      message="Info Text"
      type="info"
      closable
      onClose={onClose}
    />

    <Alert
      className="da-mt-16"
      message="Warning Text"
      type="warning"
      closable
      onClose={onClose}
    />

    <Alert
      className="da-mt-16"
      message="Danger Text"
      description="Danger Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="error"
      closable
      onClose={onClose}
    />
  </>
);
`;

export const description = `
import { Alert } from "antd";

return (
  <>
    <Alert
      message="Success Text"
      description="Success Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="success"
    />
    
    <Alert
      className="da-mt-16"
      message="Info Text"
      description="Info Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="info"
    />
    
    <Alert
      className="da-mt-16"
      message="Warning Text"
      description="Warning  Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="warning"
    />
    
    <Alert
      className="da-mt-16"
      message="Danger Text"
      description="Danger Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="error"
    />
  </>
);
`;

export const icon = `
import { Alert } from "antd";
import { RiFileWarningLine } from "react-icons/ri";

return (
  <>
    <Alert
      message="Success Alert - Lorem ipsum dolor sit amet,"
      type="success"
      showIcon
      icon={<RiFileWarningLine className="remix-icon" size={24} />}
    />

    <Alert
      className="da-mt-16"
      message="Info Text"
      description="Info Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="info"
      showIcon
      icon={<RiFileWarningLine className="remix-icon" size={24} />}
    />

    <Alert
      className="da-mt-16"
      message="Warning Alert - Lorem ipsum dolor sit amet, "
      type="warning"
      showIcon
      icon={<RiFileWarningLine className="remix-icon" size={24} />}
    />

    <Alert
      className="da-mt-16"
      message="Danger Text"
      description="Danger Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      type="error"
      showIcon
      icon={<RiFileWarningLine className="remix-icon" size={24} />}
    />
  </>
);
`;
