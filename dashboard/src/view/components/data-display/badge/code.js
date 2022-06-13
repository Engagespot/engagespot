export const basic = `
import { Badge } from "antd";
import { RiTimeLine } from "react-icons/ri";

return (
  <>
    <Badge count={5} />
    <Badge count={0} showZero />
    <Badge
      count={
        <RiTimeLine
          className="remix-icon da-text-color-primary-1"
          size={24}
        />
      }
    />
  </>
);
`;

export const badgeSizes = `
import { Badge } from "antd";

return (
  <>
    <Badge size="default" count={5}></Badge>
    <Badge size="small" count={5}></Badge>
  </>
);
`;

export const redBadge = `
import { Badge } from "antd";
import { RiNotificationLine } from "react-icons/ri";

return (
  <>
    <Badge dot offset={[-2, 5]}>
      <RiNotificationLine className="remix-icon" size={24} />
    </Badge>

    <Badge count={0} dot offset={[-2, 5]}>
      <RiNotificationLine className="remix-icon" size={24} />
    </Badge>

    <Badge dot offset={[4, 3]}>
      <a href="#">Link something</a>
    </Badge>
  </>
);
`;

export const standAlone = `
import React, {useState} from "react";

import { Badge, Switch } from "antd";
import { RiTimeLine } from "react-icons/ri";

const [show, setShow] = useState(true);

return (
  <>
    <Switch
      checked={show}
      onChange={() => {
        setShow(!show);
      }}
    />

    <Badge count={show ? 25 : 0} />

    <Badge
      count={
        show ? (
          <RiTimeLine
            className="remix-icon da-text-color-danger-1"
            size={24}
          />
        ) : (
          0
        )
      }
    />

    <Badge count={show ? 4 : 0} className="site-badge-count-4" />

    <Badge
      className="site-badge-count-109"
      count={show ? 109 : 0}
      style={{ backgroundColor: "#B2BEC3" }}
    />
  </>
);
`;

export const status = `
import { Badge } from "antd";

return (
  <>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />

    <br />

    <Badge status="success" text="Success" />
    <Badge status="error" text="Error" />
    <Badge status="default" text="Default" />
    <Badge status="processing" text="Processing" />
    <Badge status="warning" text="Warning" />
  </>
);
`;
