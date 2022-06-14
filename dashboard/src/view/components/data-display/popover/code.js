export const basic = `
import { Popover, Button } from "antd";

const content = (
  <div>
    <p className="da-mb-0">Content</p>
  </div>
);

return (
  <Popover content={content} title="Popover Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);
`;

export const placement = `
import { Popover, Button } from "antd";

const text = <span>Popover Title</span>;

const content = (
  <div>
    <p>Content</p>
  </div>
);

const buttonWidth = 90;

return (
  <div className="da-placement">
    <div style={{ marginLeft: buttonWidth, whiteSpace: "nowrap" }}>
      <Popover
        placement="topLeft"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">TL</Button>
      </Popover>

      <Popover
        placement="top"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary" className="da-mx-8">
          Top
        </Button>
      </Popover>

      <Popover
        placement="topRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">TR</Button>
      </Popover>
    </div>

    <div style={{ width: buttonWidth, float: "left" }}>
      <Popover
        placement="leftTop"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">LT</Button>
      </Popover>

      <Popover
        placement="left"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary" className="da-my-8">
          Left
        </Button>
      </Popover>

      <Popover
        placement="leftBottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">LB</Button>
      </Popover>
    </div>

    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 }}>
      <Popover
        placement="rightTop"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">RT</Button>
      </Popover>

      <Popover
        placement="right"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary" className="da-my-8">
          Right
        </Button>
      </Popover>

      <Popover
        placement="rightBottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">RB</Button>
      </Popover>
    </div>

    <div
      style={{
        marginLeft: buttonWidth,
        clear: "both",
        whiteSpace: "nowrap",
      }}
    >
      <Popover
        placement="bottomLeft"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">BL</Button>
      </Popover>

      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary" className="da-mx-8">
          Bottom
        </Button>
      </Popover>

      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Button type="primary">BR</Button>
      </Popover>
    </div>
  </div>
);
`;

export const triger = `
import { Popover, Button } from "antd";

const content = (
  <div>
    <p className="da-mb-0">Content</p>
  </div>
);

return (
  <>
    <Popover content={content} title="Popover Title" trigger="hover">
      <Button className="da-mr-16 da-mb-16"  type="primary">Hover me</Button>
    </Popover>

    <Popover content={content} title="Popover Title" trigger="focus">
      <Button type="primary" className="da-mr-16">Focus me</Button>
    </Popover>

    <Popover content={content} title="Popover Title" trigger="click">
      <Button type="primary">Click me</Button>
    </Popover>
  </>
);
`;
