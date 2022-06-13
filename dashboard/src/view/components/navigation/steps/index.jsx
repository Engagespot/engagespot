import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicSteps from './basic';
import StepsMiniVersion from './miniVersion';
import StepsWithIcon from './withIcon';
import StepsSwitchStep from './switchStep';
import StepsVertical from './vertical';
import StepsVerticalMini from './verticalMini';
import StepsErrorStatus from './errorStatus';
import StepsDotStyle from './dotStyle';
import StepsCustomizedDotStyle from './customizedDotStyle';

export default function Steps() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Navigation"
            breadCrumbActive="Steps"
          />

          <PageTitle
            pageTitle="Steps"
            pageText="Steps is a navigation bar that guides users through the steps of a task."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicSteps />
      </Col>

      <Col span={24}>
        <StepsMiniVersion />
      </Col>

      <Col span={24}>
        <StepsWithIcon />
      </Col>

      <Col span={24}>
        <StepsErrorStatus />
      </Col>

      <Col span={24}>
        <StepsSwitchStep />
      </Col>

      <Col md={12} span={24}>
        <StepsVertical />
      </Col>

      <Col md={12} span={24}>
        <StepsVerticalMini />
      </Col>

      <Col span={24}>
        <StepsDotStyle />
      </Col>

      <Col span={24}>
        <StepsCustomizedDotStyle />
      </Col>
    </Row>
  );
}
