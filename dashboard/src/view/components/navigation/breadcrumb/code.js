export const basic = `
import { Breadcrumb } from "antd";

function onChange(e) {
  //console.log("checked", e.target.checked);
}

return (
  <Breadcrumb>
    <Breadcrumb.Item>
      <a href="javascript:">Home</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <a href="javascript:">Application Center</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <a href="javascript:">Application List</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
`;

export const configuredBreadcrumb = `
import { Breadcrumb } from "antd";

function onChange(e) {
  //console.log("checked", e.target.checked);
}

return (
  <Breadcrumb separator=">">
    <Breadcrumb.Item href="javascript:">Home</Breadcrumb.Item>

    <Breadcrumb.Item href="javascript:">
      Application Center
    </Breadcrumb.Item>

    <Breadcrumb.Item href="javascript:">
      Application List
    </Breadcrumb.Item>

    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
`;

export const icon = `
import { Breadcrumb } from "antd";
import {
  RiHome2Line,
  RiApps2Line,
  RiFileListLine,
  RiContactsLine,
} from "react-icons/ri";

function onChange(e) {
  //console.log("checked", e.target.checked);
}

return (
  <Breadcrumb>
    <Breadcrumb.Item href="javascript:">
      <RiHome2Line className="remix-icon" />
    </Breadcrumb.Item>

    <Breadcrumb.Item href="javascript:">
      <RiApps2Line className="remix-icon" />
      <span>Application List</span>
    </Breadcrumb.Item>

    <Breadcrumb.Item href="javascript:">
      <RiFileListLine className="remix-icon" />
      <span>Application List</span>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <RiContactsLine className="remix-icon" />
      <span>An Application</span>
    </Breadcrumb.Item>
  </Breadcrumb>
);
`;
