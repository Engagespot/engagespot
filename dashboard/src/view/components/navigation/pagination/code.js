export const basic = `
import { Pagination } from "antd";

return (
  <Pagination defaultCurrent={1} total={50} />
);
`;

export const changer = `
import { Pagination } from "antd";

function onShowSizeChange(current, pageSize) {
  //console.log(current, pageSize);
}

return (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />

    <br />

    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
);
`;

export const jumper = `
import { Pagination } from "antd";

function onChange(pageNumber) {
  //console.log("Page: ", pageNumber);
}

return (
  <>
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
    />

    <br />

    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
      disabled
    />
  </>
);
`;

export const miniSize = `
import { Pagination, Divider } from "antd";

function showTotal(total) {
  return "Total " + total + " items";
}

return (
  <>
    <Pagination size="small" total={50} className="da-mb-16" />

    <Divider />

    <Pagination
      size="small"
      total={50}
      showSizeChanger
      showQuickJumper
      className="da-mb-16"
    />

    <Divider />

    <Pagination
      size="small"
      total={50}
      showTotal={showTotal}
      className="da-mb-16"
    />

    <Divider />

    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
);
`;

export const more = `
import { Pagination } from "antd";

return (
  <Pagination defaultCurrent={6} total={500} />
);
`;

export const prevNext = `
import { Pagination } from "antd";

function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a href="#">Previous</a>;
  }
  if (type === "next") {
    return <a href="#">Next</a>;
  }
  return originalElement;
}

return (
  <Pagination total={500} itemRender={itemRender} />
);
`;

export const simpleMode = `
import { Pagination } from "antd";

return (
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    
    <br />
    
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>
);
`;
