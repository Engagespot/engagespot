export const success = `
import { Result, Button } from "antd";
import { RiCheckboxCircleFill } from "react-icons/ri";

return (
  <Result
    status="success"
    title={<h3>Successfully Purchased Cloud Server ECS!</h3>}
    icon={<RiCheckboxCircleFill className="remix-icon" />}
    extra={
      <>
        <Button type="primary">
          Go Console
        </Button>

        <Button className="da-ml-8" ghost>
          Buy Again
        </Button>
      </>
    }
  />
);
`;

export const info = `
import { Result, Button } from "antd";
import { RiErrorWarningFill } from "react-icons/ri";

return (
  <Result
    status="info"
    title={<h3>Your operation has been executed</h3>}
    icon={<RiErrorWarningFill className="remix-icon" />}
    extra={
      <Button type="primary">
        Go Console
      </Button>
    }
  />
);
`;

export const warning = `
import { Result, Button } from "antd";
import { RiAlertFill } from "react-icons/ri";

return (
  <Result
    status="warning"
    title={<h3>There are some problems with your operation.</h3>}
    icon={<RiAlertFill className="remix-icon" />}
    extra={
      <Button type="primary">
        Go Console
      </Button>
    }
  />
);
`;

export const error = `
import { Result, Button, Typography } from "antd";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";

const { Paragraph, Text } = Typography;

return (
  <div className="da-result-col">
    <Result
      status="error"
      title={<h3 className="da-mb-32">Submission Failed</h3>}
      icon={<RiCloseCircleFill className="remix-icon" />}
      extra={null}
    >
      <div className="desc">
        <Paragraph>
          <Text className="h5">
            The content you submitted has the following error:
          </Text>
        </Paragraph>

        <Paragraph>
          <RiCloseCircleLine className="remix-icon da-text-color-danger-1 da-mr-8" />
          Your account has been frozen. <a href="#">Thaw immediately &gt;</a>
        </Paragraph>

        <Paragraph>
          <RiCloseCircleLine className="remix-icon da-text-color-danger-1 da-mr-8" />
          Your account is not yet eligible to apply.
          <a href="#">Apply Unlock &gt;</a>
        </Paragraph>
      </div>
    </Result>

    <div className="da-text-center da-mt-24">
      <Button type="primary">
        Go Console
      </Button>

      <Button className="da-ml-8" ghost>
        Buy Again
      </Button>
    </div>
  </div>
);
`;
