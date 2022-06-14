export const progressBar = `
import { Progress } from "antd";

return (
  <div>
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={30} />
  </div>

  <div className="da-mt-8">
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={50} status="active" />
  </div>

  <div className="da-mt-8">
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={70} status="exception" />
  </div>

  <div className="da-mt-8">
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={100} />
  </div>
);
`;

export const circleProgressBar = `
import { Row, Col, Progress } from "antd";

return (
  <Row gutter={[8, 8]}>
    <Col>
      <Progress
        type="circle"
        width={160}
        percent={75}
        strokeWidth={2}
      />
    </Col>

    <Col className="da-text-center">
      <Progress
        type="circle"
        percent={70}
        width={160}
        strokeWidth={2}
        status="exception"
      />
      <p className="da-badge-text da-font-weight-400 da-mb-0 da-mt-8">
        Information
      </p>
    </Col>

    <Col className="da-text-center">
      <Progress
        type="circle"
        percent={100}
        width={160}
        strokeWidth={2}
      />
      <p className="da-badge-text da-font-weight-400 da-mb-0 da-mt-8">
        Information
      </p>
    </Col>
  </Row>
);
`;

export const miniProgressBar = `
import { Progress } from "antd";

return (
  <div>
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={30} />
  </div>

  <div className="da-mt-8">
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={50} status="active" />
  </div>

  <div className="da-mt-8">
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={70} status="exception" />
  </div>

  <div className="da-mt-8">
    <p className="da-mb-0 da-p1-body">Progress Title</p>
    <Progress percent={100} />
  </div>
);
`;

export const miniCircleProgressBar = `
import { Row, Col, Progress } from "antd";

return (
  <Row gutter={[8, 8]}>
    <Col>
      <Progress
        type="circle"
        width={160}
        percent={75}
        width={100}
        strokeWidth={2}
      />
    </Col>

    <Col className="da-text-center">
      <Progress
        type="circle"
        percent={70}
        width={100}
        strokeWidth={2}
        status="exception"
      />
      <p className="da-badge-text da-font-weight-400 da-mb-0 da-mt-8">
        Information
      </p>
    </Col>

    <Col className="da-text-center">
      <Progress
        type="circle"
        percent={100}
        width={100}
        strokeWidth={2}
      />
      <p className="da-badge-text da-font-weight-400 da-mb-0 da-mt-8">
        Information
      </p>
    </Col>
  </Row>
);
`;
