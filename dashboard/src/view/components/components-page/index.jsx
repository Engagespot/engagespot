import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Row, Col, Card, Button } from 'antd';
import { RiArrowRightSLine } from 'react-icons/ri';

import Breadcrumbs from '../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../layout/components/content/page-title';

export default function Buttons() {
  let history = useHistory();

  const components = [
    {
      title: 'Style Guide',
      subtitle: 'Yoda UI Style with typography and colors.',
      link: '/components/general/style-guide',
    },
    {
      title: 'Buttons',
      subtitle: 'To trigger an operation.',
      link: '/components/general/buttons',
    },
    {
      title: 'Icons',
      subtitle: 'Remix Icon for Yoda Admin Template',
      link: '/components/general/icons',
    },
    {
      title: 'Breadcrumb',
      subtitle: 'Examples of ant breadcrumbs',
      link: '/components/navigation/breadcrumb',
    },
    {
      title: 'Dropdown',
      subtitle: 'Examples of ant dropdown',
      link: '/components/navigation/dropdown',
    },
    {
      title: 'Menu',
      subtitle: 'Examples of ant menu for navigation',
      link: '/components/navigation/menu',
    },
    {
      title: 'Pagination',
      subtitle: 'Examples of ant pagination',
      link: '/components/navigation/pagination',
    },
    {
      title: 'Steps',
      subtitle: 'Examples of ant steps',
      link: '/components/navigation/steps',
    },
    {
      title: 'Checkbox',
      subtitle: 'Examples of ant checkbox',
      link: '/components/data-entry/checkbox',
    },
    {
      title: 'Date Picker',
      subtitle: 'Examples of ant date picker',
      link: '/components/data-entry/datepicker',
    },
    {
      title: 'Form',
      subtitle: 'Examples of ant form',
      link: '/components/data-entry/form',
    },
    {
      title: 'Inputs',
      subtitle: 'Examples of ant inputs',
      link: '/components/data-entry/inputs',
    },
    {
      title: 'Input Number',
      subtitle: 'Examples of ant input number',
      link: '/components/data-entry/input-number',
    },
    {
      title: 'Radio',
      subtitle: 'Examples of ant Radio',
      link: '/components/data-entry/radio',
    },
    {
      title: 'Rate',
      subtitle: 'Examples of ant rate',
      link: '/components/data-entry/rate',
    },
    {
      title: 'Slider',
      subtitle: 'Examples of ant slider',
      link: '/components/data-entry/slider',
    },
    {
      title: 'Switch',
      subtitle: 'Examples of ant switch',
      link: '/components/data-entry/switch',
    },
    {
      title: 'Upload',
      subtitle: 'Examples of ant upload',
      link: '/components/data-entry/upload',
    },
    {
      title: 'Avatar',
      subtitle: 'Examples of ant avatar',
      link: '/components/data-display/avatar',
    },
    {
      title: 'Badge',
      subtitle: 'Examples of ant badge',
      link: '/components/data-display/badge',
    },
    {
      title: 'Calendar',
      subtitle: 'Examples of ant calendar',
      link: '/components/data-display/calendar',
    },
    {
      title: 'Card',
      subtitle: 'Examples of ant card',
      link: '/components/data-display/card',
    },
    {
      title: 'Collapse',
      subtitle: 'Examples of ant collapse',
      link: '/components/data-display/collapse',
    },
    {
      title: 'Comment',
      subtitle: 'Examples of ant comment',
      link: '/components/data-display/comment',
    },
    {
      title: 'Empty',
      subtitle: 'Examples of ant empty',
      link: '/components/data-display/empty',
    },
    {
      title: 'List',
      subtitle: 'Examples of ant list',
      link: '/components/data-display/list',
    },
    {
      title: 'Popover',
      subtitle: 'Examples of ant popover',
      link: '/components/data-display/popover',
    },
    {
      title: 'Table',
      subtitle: 'Examples of ant table',
      link: '/components/data-display/table',
    },
    {
      title: 'Tabs',
      subtitle: 'Examples of ant tabs',
      link: '/components/data-display/tabs',
    },
    {
      title: 'Tag',
      subtitle: 'Examples of ant tag',
      link: '/components/data-display/tag',
    },
    {
      title: 'Timeline',
      subtitle: 'Examples of ant timeline',
      link: '/components/data-display/timeline',
    },
    {
      title: 'Tooltip',
      subtitle: 'Examples of ant tooltip',
      link: '/components/data-display/tooltip',
    },
    {
      title: 'Alert',
      subtitle: 'Examples of ant alert',
      link: '/components/feedback/alert',
    },
    {
      title: 'Drawer',
      subtitle: 'Examples of ant drawer',
      link: '/components/feedback/drawer',
    },
    {
      title: 'Modal',
      subtitle: 'Examples of ant modal',
      link: '/components/feedback/modal',
    },
    {
      title: 'Message',
      subtitle: 'Examples of ant message',
      link: '/components/feedback/message',
    },
    {
      title: 'Notification',
      subtitle: 'Examples of ant notification',
      link: '/components/feedback/notification',
    },
    {
      title: 'Popconfirm',
      subtitle: 'Examples of ant popconfirm',
      link: '/components/feedback/popconfirm',
    },
    {
      title: 'Progress',
      subtitle: 'Examples of ant progress',
      link: '/components/feedback/progress',
    },
    {
      title: 'Result',
      subtitle: 'Examples of ant result',
      link: '/components/feedback/result',
    },
    {
      title: 'Skeleton',
      subtitle: 'Examples of ant skeleton',
      link: '/components/feedback/skeleton',
    },
  ];

  return (
    <Row gutter={32}>
      <Col className="da-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs breadCrumbActive="Components" />

          <PageTitle
            pageTitle="Components"
            pageText="Yoda Components has all ant components helps you create beautiful apps."
          />
        </Row>
      </Col>

      <Col span={24} className="da-mb-32">
        <Row gutter={[32, 32]}>
          {components.map(component => (
            <Col span={12}>
              <Card>
                <Row align="middle" justify="space-between">
                  <Link to={component.link}>
                    <h5 className="da-mb-8">{component.title}</h5>
                    <p className="da-mb-0 da-p1-body">{component.subtitle}</p>
                  </Link>

                  <Button
                    className="da-p-0"
                    type="secondary"
                    shape="circle"
                    icon={<RiArrowRightSLine className="remix-icon" />}
                    onClick={() => history.push(component.link)}
                  />
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
