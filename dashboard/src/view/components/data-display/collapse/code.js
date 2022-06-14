export const collapse = `
import { Collapse, Tag } from "antd";
import { RiBasketballLine, RiArrowRightSLine } from "react-icons/ri";

const { Panel } = Collapse;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.";

function callback() {}

const genExtra = () => (
  <RiArrowRightSLine
    size={24}
    className="da-collapse-arrow da-text-color-black-60"
  />
);

return (
  <Collapse defaultActiveKey={["1"]} onChange={callback}>
    <Panel
      header={
        <p className="da-d-flex-center da-p1-body da-mb-0">
          <RiBasketballLine
            size={24}
            className="remix-icon da-text-color-primary-1 da-mr-18"
          />
          <span>Lorem Ipsum Collapse Title</span>
          <Tag className="da-ml-16" color="blue">
            Tag
          </Tag>
        </p>
      }
      key="1"
      showArrow={false}
      extra={genExtra()}
    >
      <p className="da-p1-body">{text}</p>
    </Panel>

    <Panel
      header={
        <p className="da-d-flex-center da-p1-body da-mb-0">
          <RiBasketballLine
            size={24}
            className="remix-icon da-text-color-primary-1 da-mr-18"
          />
          <span>Lorem Ipsum Collapse Title</span>
          <Tag className="da-ml-16" color="blue">
            Tag
          </Tag>
        </p>
      }
      key="2"
      showArrow={false}
      extra={genExtra()}
    >
      <p className="da-p1-body">{text}</p>
    </Panel>

    <Panel
      header={
        <p className="da-d-flex-center da-p1-body da-mb-0">
          <RiBasketballLine
            size={24}
            className="remix-icon da-text-color-primary-1 da-mr-18"
          />
          <span>Lorem Ipsum Collapse Title</span>
          <Tag className="da-ml-16" color="blue">
            Tag
          </Tag>
        </p>
      }
      key="3"
      showArrow={false}
      extra={genExtra()}
    >
      <p className="da-p1-body">{text}</p>
    </Panel>
  </Collapse>
);
`;

export const accordion = `
import { Collapse, Tag } from "antd";
import { RiBasketballLine, RiArrowRightSLine } from "react-icons/ri";

const { Panel } = Collapse;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.";

const genExtra = () => (
  <RiArrowRightSLine
    size={24}
    className="da-collapse-arrow da-text-color-black-60"
  />
);

return (
  <Collapse accordion>
    <Panel
      header={
        <p className="da-d-flex-center da-p1-body da-mb-0">
          <RiBasketballLine
            size={24}
            className="remix-icon da-text-color-primary-1 da-mr-18"
          />
          <span>Lorem Ipsum Collapse Title</span>
          <Tag className="da-ml-16" color="blue">
            Tag
          </Tag>
        </p>
      }
      key="1"
      showArrow={false}
      extra={genExtra()}
    >
      <p className="da-p1-body">{text}</p>
    </Panel>

    <Panel
      header={
        <p className="da-d-flex-center da-p1-body da-mb-0">
          <RiBasketballLine
            size={24}
            className="remix-icon da-text-color-primary-1 da-mr-18"
          />
          <span>Lorem Ipsum Collapse Title</span>
          <Tag className="da-ml-16" color="blue">
            Tag
          </Tag>
        </p>
      }
      key="2"
      showArrow={false}
      extra={genExtra()}
    >
      <p className="da-p1-body">{text}</p>
    </Panel>

    <Panel
      header={
        <p className="da-d-flex-center da-p1-body da-mb-0">
          <RiBasketballLine
            size={24}
            className="remix-icon da-text-color-primary-1 da-mr-18"
          />
          <span>Lorem Ipsum Collapse Title</span>
          <Tag className="da-ml-16" color="blue">
            Tag
          </Tag>
        </p>
      }
      key="3"
      showArrow={false}
      extra={genExtra()}
    >
      <p className="da-p1-body">{text}</p>
    </Panel>
  </Collapse>
);
`;
