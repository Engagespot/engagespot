import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { replyEditor } from './code';

import {
  Card,
  Row,
  Col,
  List,
  Avatar,
  Comment,
  Form,
  Input,
  Button,
} from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import moment from 'moment';

import user from '../../../../assets/images/memoji/memoji-1.png';

export default function CommentReplyEditor() {
  const { TextArea } = Input;
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);

      setValue('');

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

  const handleChange = e => {
    setValue(e.target.value);
  };

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Reply Editor</h4>
          <p className="da-p1-body">
            Comment can be used as an editor, so the user can customize the
            contents of the component.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
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
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {replyEditor}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
