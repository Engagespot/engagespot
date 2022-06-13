export const basic = `
import { Tooltip } from "antd";

return (
  <Tooltip title="prompt text">
    <span>This  is a tooltip</span>
  </Tooltip>
);
`;

export const placement = `
import { Tooltip, Button } from "antd";

const text = <span>This is tooltip</span>;

return (
  <div className="da-placement">
    <div style={{ marginLeft: 90, whiteSpace: "nowrap" }}>
      <Tooltip
        placement="topLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">TL</Button>
      </Tooltip>

      <Tooltip
        placement="top"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
      >
        <Button type="primary">Top</Button>
      </Tooltip>

      <Tooltip
        placement="topRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
      >
        <Button type="primary">TR</Button>
      </Tooltip>
    </div>
    
    <div style={{ width: 90, float: "left" }}>
      <Tooltip
        placement="leftTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">LT</Button>
      </Tooltip>

      <Tooltip
        placement="left"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
      >
        <Button type="primary">Left</Button>
      </Tooltip>

      <Tooltip
        placement="leftBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
      >
        <Button type="primary">LB</Button>
      </Tooltip>
    </div>

    <div style={{ width: 90, marginLeft: 358 }}>
      <Tooltip
        placement="rightTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">RT</Button>
      </Tooltip>

      <Tooltip
        placement="right"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
      >
        <Button type="primary">Right</Button>
      </Tooltip>

      <Tooltip
        placement="rightBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-mt-8"
      >
        <Button type="primary">RB</Button>
      </Tooltip>
    </div>

    <div
      style={{ marginLeft: 90, clear: "both", whiteSpace: "nowrap" }}
    >
      <Tooltip
        placement="bottomLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">BL</Button>
      </Tooltip>
      
      <Tooltip
        placement="bottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
      >
        <Button type="primary">Bottom</Button>
      </Tooltip>
      
      <Tooltip
        placement="bottomRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        className="da-ml-8"
      >
        <Button type="primary">BR</Button>
      </Tooltip>
    </div>
  </div>
);
`;
