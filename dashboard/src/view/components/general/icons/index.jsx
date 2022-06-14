import React, { useState } from 'react';

import { Card, Row, Col, Radio, message, Input } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import data from './data';

export default function Icons() {
  const { Search } = Input;

  const [checked, setChecked] = useState('all');
  const [search, setSearch] = useState('');
  const icon = data;

  function onChange(e) {
    setChecked(e.target.value);
  }

  const icons = icon
    .filter(icon => icon.includes(search))
    .map((icon, index) => (
      <React.Fragment key={index}>
        {checked === 'all' && (
          <Col xl={4} md={8} span={12}>
            <Card
              onClick={() => {
                navigator.clipboard.writeText(
                  `<i className="ri-${icon}-line" />`
                );
                message.success(
                  `<i className="ri-${icon}-line" /> Copied successfully`
                );
              }}
              className="da-text-center da-icon-card"
            >
              <i
                className={'da-text-color-dark-0 ri-2x ri-' + icon + '-line'}
              />
              <p className="da-badge-text">{icon}</p>
            </Card>
          </Col>
        )}

        {checked === 'all' && (
          <Col xl={4} md={8} span={12}>
            <Card
              onClick={() => {
                navigator.clipboard.writeText(
                  `<i className="ri-${icon}-fill" />`
                );
                message.success(
                  `<i className="ri-${icon}-fill" /> Copied successfully`
                );
              }}
              className="da-text-center da-icon-card"
            >
              <i
                className={'da-text-color-dark-0 ri-2x ri-' + icon + '-fill'}
              />
              <p className="da-badge-text">{icon}</p>
            </Card>
          </Col>
        )}

        {checked === 'fill' && (
          <Col xl={4} md={8} span={12}>
            <Card
              onClick={() => {
                navigator.clipboard.writeText(
                  `<i className="ri-${icon}-fill" />`
                );
                message.success(
                  `<i className="ri-${icon}-fill" /> Copied successfully`
                );
              }}
              className="da-text-center da-icon-card"
            >
              <i
                className={'da-text-color-dark-0 ri-2x ri-' + icon + '-fill'}
              />
              <p className="da-badge-text">{icon}</p>
            </Card>
          </Col>
        )}

        {checked === 'line' && (
          <Col xl={4} md={8} span={12}>
            <Card
              onClick={() => {
                navigator.clipboard.writeText(
                  `<i className="ri-${icon}-line" />`
                );
                message.success(
                  `<i className="ri-${icon}-line" /> Copied successfully`
                );
              }}
              className="da-text-center da-icon-card"
            >
              <i
                className={'da-text-color-dark-0 ri-2x ri-' + icon + '-line'}
              />
              <p className="da-badge-text">{icon}</p>
            </Card>
          </Col>
        )}
      </React.Fragment>
    ));

  return (
    <Row className="da-mb-32">
      <Col className="da-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="General"
            breadCrumbActive="Icons"
          />

          <PageTitle
            pageTitle="Icons"
            pageText="We used Remix Icon for Yoda
              Admin Template"
          />
        </Row>
      </Col>

      <Col lg={24} md={24} sm={24} xs={24}>
        <Row>
          <Col flex={0}>
            <Radio.Group
              size="large"
              onChange={onChange}
              defaultValue="all"
              className="da-pb-32 da-mr-16"
            >
              <Radio.Button value="line">Line</Radio.Button>
              <Radio.Button value="all">All</Radio.Button>
              <Radio.Button value="fill">Fill</Radio.Button>
            </Radio.Group>
          </Col>

          <Col flex={5}>
            <Search
              className="da-pb-32"
              placeholder="input search text"
              size="large"
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row gutter={[32, 32]}>{icons}</Row>
      </Col>
    </Row>
  );
}
