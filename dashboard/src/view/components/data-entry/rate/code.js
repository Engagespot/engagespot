export const basic = `
import { Rate } from "antd";

return (
  <Rate />
);
`;

export const customize = `
import { Rate } from "antd";
import { RiEmotionLine, RiEmotionUnhappyLine, RiEmotionNormalLine, RiEmotionHappyLine, RiEmotionLaughLine } from "react-icons/ri";

const customIcons = {
  1: <RiEmotionUnhappyLine  size={24}/>,
  2: <RiEmotionNormalLine size={24} />,
  3: <RiEmotionHappyLine  size={24}/>,
  4: <RiEmotionLine size={24} />,
  5: <RiEmotionLaughLine size={24} />,
};

return (
  <Rate defaultValue={2} character={({ index }) => index + 1} />
  <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
);
`;

export const halfstar = `
import { Rate } from "antd";

return (
  <Rate allowHalf defaultValue={2.5} />
);
`;

export const othercharacter = `
import { Rate } from "antd";
import { RiHeartFill } from "react-icons/ri";

return (
  <Rate character={<RiHeartFill size={24} />} allowClear className="da-text-color-danger-1" />
  <Rate character="A" allowHalf style={{ fontSize: 36 }} />
);
`;
