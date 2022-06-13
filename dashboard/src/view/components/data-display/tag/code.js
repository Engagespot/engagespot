export const basic = `
import { Row, Col, Tag } from "antd";
import { RiTimeLine } from "react-icons/ri";

function log(e) {
  //console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  //console.log("Clicked! But prevent default.");
}

return (
  <Row gutter={[0, 16]}>
    <Col>
      <Tag className="da-mr-16">Tag 1</Tag>
    </Col>

    <Col>
      <Tag className="da-mr-16">
        <a href="#">Link</a>
      </Tag>
    </Col>

    <Col>
      <Tag className="da-mr-16" closable onClose={log}>
        Tag 2
      </Tag>
    </Col>

    <Col>
      <Tag className="da-mr-16" closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </Col>
  </Row>
);
`;

export const colorful = `
import { Row, Col, Tag } from "antd";
import { RiTimeLine } from "react-icons/ri";

function log(e) {
  //console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  //console.log("Clicked! But prevent default.");
}

return (
  <Row gutter={[0, 16]}>
    <Col className="da-mr-16">
      <Tag>Tag</Tag>
    </Col>

    <Col className="da-mr-16">
      <Tag color="blue">Tag</Tag>
    </Col>

    <Col className="da-mr-16">
      <Tag color="magenta">Tag</Tag>
    </Col>

    <Col className="da-mr-16">
      <Tag color="red">Tag</Tag>
    </Col>

    <Col className="da-mr-16">
      <Tag color="green">Tag</Tag>
    </Col>

    <Col className="da-mr-16">
      <Tag color="gold">Tag</Tag>
    </Col>

    <Col className="da-mr-16">
      <Tag color="cyan">Tag</Tag>
    </Col>
  </Row>
);
`;

export const status = `
import { Row, Col, Tag } from "antd";
import { RiCheckboxCircleLine, RiRefreshLine, RiCloseCircleLine, RiErrorWarningLine, RiTimeLine, RiIndeterminateCircleLine} from "react-icons/ri";
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

function log(e) {
  //console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  //console.log("Clicked! But prevent default.");
}

return (
  <Col span={24}>
    <h5 className="da-mb-16">Without Icon</h5>

    <Row gutter={[0, 16]}>
      <Col className="da-mr-16">
        <Tag color="success">success</Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag color="processing">processing</Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag color="error">error</Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag color="warning">warning</Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag color="default">default</Tag>
      </Col>
    </Row>

    <h5 className="da-mt-24 da-mb-16">Without Icon</h5>

    <Row gutter={[0, 16]}>
      <Col className="da-mr-16">
        <Tag
          icon={<RiCheckboxCircleLine className="remix-icon" />}
          color="success"
        >
          Success
        </Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag
          icon={<RiRefreshLine className="remix-icon remix-icon-spin" />}
          color="processing"
        >
          Processing
        </Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag
          icon={<RiCloseCircleLine className="remix-icon" />}
          color="error"
        >
          Error
        </Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag
          icon={<RiErrorWarningLine className="remix-icon" />}
          color="warning"
        >
          Warning
        </Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag icon={<RiTimeLine className="remix-icon" />} color="default">
          Waiting
        </Tag>
      </Col>

      <Col className="da-mr-16">
        <Tag
          icon={<RiIndeterminateCircleLine className="remix-icon" />}

          color="default"
        >
          Stop
        </Tag>
      </Col>
    </Row>
  </Col>
);
`;
