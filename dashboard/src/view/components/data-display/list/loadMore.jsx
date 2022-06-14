import React, { useState, useEffect } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { load } from './code.js';

import { Card, Row, Col, List, Avatar, Skeleton, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

import user from '../../../../assets/images/memoji/memoji-1.png';

export default function ListLoadMore() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const axios = require('axios').default;
  const count = 3;
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`
      )
      .then(function (response) {
        setList(response.data.results);
        setInitLoading(false);
      });
  };

  const onLoadMore = () => {
    setLoading(true);
    setList(
      list.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      )
    );

    axios
      .get(
        `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`
      )
      .then(function (response) {
        let data = list.concat(response.data.results);
        setList(data);
        setLoading(false);
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Load more</h4>
          <p className="da-p1-body">Load more list with loadMore property.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <List
            className="da-demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[
                  <a href="#" key="list-loadmore-edit">
                    edit
                  </a>,
                  <a href="#" key="list-loadmore-more">
                    more
                  </a>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={user} />}
                    title={<a href="#">{item.name.last}</a>}
                    description="Yoda Design, a design language for background applications, is refined by Hypeople UED Team"
                  />
                  <div className="da-text-color-dark-0">content</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {load}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
