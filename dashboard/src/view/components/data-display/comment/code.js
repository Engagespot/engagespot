export const basic = `
import React, { useState } from "react";

import { Avatar, Tooltip, Comment } from "antd";
import {
  RiThumbUpLine,
  RiThumbUpFill,
  RiThumbDownLine,
  RiThumbDownFill,
  RiMessage3Line,
  RiStarLine,
} from "react-icons/ri";
import moment from "moment";

import user from "../../../../assets/images/memoji/memoji-1.png";

const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);
const [action, setAction] = useState(null);

const like = () => {
  setLikes(1);
  setDislikes(0);
  setAction("liked");
};

const dislike = () => {
  setLikes(0);
  setDislikes(1);
  setAction("disliked");
};

const actions = [
  <Tooltip key="comment-basic-like" title="Like">
    <span onClick={like}>
      {React.createElement(
        action === "liked" ? RiThumbUpFill : RiThumbUpLine
      )}
      <span className="da-pl-8 comment-action">{likes}</span>
    </span>
  </Tooltip>,
  <Tooltip key="comment-basic-dislike" title="Dislike">
    <span onClick={dislike}>
      {React.createElement(
        action === "disliked" ? RiThumbDownFill : RiThumbDownLine
      )}
      <span className="da-pl-8 comment-action">{dislikes}</span>
    </span>
  </Tooltip>,
  <span key="comment-basic-reply-to">Reply to</span>,
];

return (
  <Comment
    actions={actions}
    author={<a href="#">Dolores O'Riordan</a>}
    avatar={
      <Avatar
        src={user}
        alt="Dolores O'Riordan"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and
        high quality design resources (Sketch and Axure), to help people
        create their product prototypes beautifully and efficiently.
      </p>
    }
    datetime={
      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment().fromNow()}</span>
      </Tooltip>
    }
  />
);
`;

export const listUsage = `
import { List, Tooltip, Comment } from "antd";
import {
  RiThumbUpLine,
  RiThumbUpFill,
  RiThumbDownLine,
  RiThumbDownFill,
  RiMessage3Line,
  RiStarLine,
} from "react-icons/ri";
import moment from "moment";

import user from "../../../../assets/images/memoji/memoji-1.png";

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Dolores O'Riordan",
    avatar: user,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create
        their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(1, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Dolores O'Riordan",
    avatar: user,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create
        their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(2, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
];

return (
  <List
    className="comment-list"
    header={data.length + "replies"}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
);
`;

export const replyEditor = `
import React, { useState } from "react";

import {
  List,
  Avatar,
  Comment,
  Form,
  Input,
  Button,
} from "antd";
import {
  RiThumbUpLine,
  RiThumbUpFill,
  RiThumbDownLine,
  RiThumbDownFill,
  RiMessage3Line,
  RiStarLine,
} from "react-icons/ri";
import moment from "moment";

import user from "../../../../assets/images/memoji/memoji-1.png";

const { TextArea } = Input;

const [comments, setComments] = useState([]);
const [submitting, setSubmitting] = useState(false);
const [value, setValue] = useState("");

const handleSubmit = () => {
  if (!value) {
    return;
  }

  setSubmitting(true);
  setTimeout(() => {
    setSubmitting(false),
      setValue(""),
      setComments([
        ...comments,
        {
          author: "Dolores O'Riordan",
          avatar: user,
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
  }, 1000);
};

const handleChange = (e) => {
  setValue(e.target.value);
};

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={comments.length + " " + comments.length > 1 ? "replies": "reply"}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

return (
  <>
    {comments.length > 0 && <CommentList comments={comments} />}

    <Comment
      avatar={<Avatar src={user} alt="Dolores O'Riordan" />}
      content={
        <>
          <Form.Item>
            <TextArea
              rows={4}
              onChange={handleChange}
              value={value}
              key={2}
            />
          </Form.Item>
          
          <Form.Item>
            <Button
              htmlType="submit"
              loading={submitting}
              onClick={handleSubmit}
              type="primary"
            >
              Add Comment
            </Button>
          </Form.Item>
        </>
      }
    />
  </>
);
`;
