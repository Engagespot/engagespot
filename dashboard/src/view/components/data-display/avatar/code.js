export const responsiveAvatar = `
import { Avatar } from "antd";
import { User } from "react-iconly";

return (
  <Avatar
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<User className="remix-icon" />}
  />
);
`;

export const basic = `
import { Avatar } from "antd";
import { User } from "react-iconly";

return (
  <>
    <div>
      <Avatar size={64} icon={<User className="remix-icon" />} />
      <Avatar size="large" icon={<User className="remix-icon" />} />
      <Avatar icon={<User className="remix-icon" />} />
      <Avatar size="small" icon={<User className="remix-icon" />} />
    </div>

    <div>
      <Avatar shape="square" size={64} icon={<User className="remix-icon" />} />
      <Avatar shape="square" size="large" icon={<User className="remix-icon" />} />
      <Avatar shape="square" icon={<User className="remix-icon" />} />
      <Avatar shape="square" size="small" icon={<User className="remix-icon" />} />
    </div>
  </>
);
`;

export const avatarbadge = `
import { Avatar, Badge } from "antd";
import { User } from "react-iconly";

return (
  <>
    <Badge count={1}>
      <Avatar
        shape="square"
        size={48}
        icon={<User className="remix-icon" />}
      />
    </Badge>

    <Badge dot>
      <Avatar
        shape="square"
        size={48}
        icon={<User className="remix-icon" />}
      />
    </Badge>
  </>
);
`;

export const avatarGroup = `
import { Avatar, Tooltip, Divider } from "antd";
import { RiReactjsLine } from "react-icons/ri";
import { User } from "react-iconly";

return (
  <>
    <Avatar.Group>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

      <Avatar className="da-text-color-danger-1 da-bg-color-danger-4">
        K
      </Avatar>

      <Tooltip title="Ant User" placement="top">
        <Avatar
          className="da-text-color-black-100 da-bg-color-black-20"
          icon={<User />}
        />
      </Tooltip>

      <Avatar
        className="da-text-color-info-1 da-bg-color-info-4"
        icon={<RiReactjsLine />}
      />
    </Avatar.Group>

    <Divider />

    <Avatar.Group
      maxCount={2}
      maxStyle={{ color: "#FF0022", backgroundColor: "#FFE7EA" }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

      <Avatar className="da-text-color-warning-1 da-bg-color-warning-4">
        K
      </Avatar>

      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<User />}
        />
      </Tooltip>

      <Avatar
        style={{ backgroundColor: "#1890ff" }}
        icon={<RiReactjsLine />}
      />
    </Avatar.Group>

    <Divider />

    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{ color: "#FF0022", backgroundColor: "#FFE7EA" }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

      <Avatar className="da-text-color-warning-1 da-bg-color-warning-4">
        K
      </Avatar>

      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<User />}
        />
      </Tooltip>

      <Avatar
        style={{ backgroundColor: "#1890ff" }}
        icon={<RiReactjsLine />}
      />
    </Avatar.Group>
  </>
);
`;

export const types = `
import { Avatar, Image } from "antd";
import { User } from "react-iconly";

return (
  <>
    <Avatar icon={<User />} />

    <Avatar>S</Avatar>

    <Avatar size={40}>USER</Avatar>

    <Avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />

    <Avatar
      src={
        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
    />

    <Avatar className="da-text-color-danger-1 da-bg-color-danger-4">
      D
    </Avatar>
    
    <Avatar
      className="da-bg-color-success-4 da-text-color-success-1"
      icon={<User className="remix-icon" />}
    />
  </>
);
`;
