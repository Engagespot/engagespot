export const basic = `
import { Empty } from "antd";

return (
  <Empty />
);
`;

export const chooseImage = `
import { Empty } from "antd";

return (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
);
`;

export const noDescription = `
import { Empty } from "antd";

return (
  <Empty description={false} />
}
`;

export const customize = `
import { Empty, Button } from "antd";

import girlandcat from "../../../../assets/images/illustrations/girlandcat.svg";

return (
  <Empty 
    className="da-my-8"
    image={girlandcat}
    imageStyle={{
      height: 240,
    }}
    description={
      <span className="da-text-color-dark-30">Select workout plan</span>
    }
  >
    <Button type="primary">Start Now</Button>
  </Empty>
);
`;
