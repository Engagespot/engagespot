export const basic = `
import { Skeleton } from "antd";

return (
  <div className="da-bg-color-black-0 da-p-16">
    <Skeleton />
  </div>
);
`;

export const complex = `
import { Skeleton } from "antd";

return (
  <div className="da-bg-color-black-0 da-p-16">
    <Skeleton avatar paragraph={{ rows: 4 }} />
  </div>
);
`;
