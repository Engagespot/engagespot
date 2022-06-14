import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicSelect from './basic';
import SelectSearchField from './searchField';
import SelectMultipleSelection from './multipleSelection';
import SelectSizes from './sizes';
import SelectCustomSelection from './customSelection';
import SelectSearchSort from './searchSort';
import SelectTags from './tags';
import SelectOptionGroup from './optionGroup';
import SelectCoordinate from './coordinate';
import SelectSearchBox from './searchBox';
import SelectSelectedItem from './selectedItem';
import SelectAutomaticTokenization from './automaticTokenization';
import SearchSelectUsers from './searchSelectUsers';
import SelectCustomDropdown from './customDropdown';
import SelectHideSelected from './hideSelected';
import SelectBorderedLess from './borderedLess';
import SelectCustomTagRender from './customTagRender';
import SelectResponsive from './responsive';
import SelectBigData from './bigData';

export default function Select() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Select"
          />

          <PageTitle
            pageTitle="Select"
            pageText="Select component to select value from options."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicSelect />
      </Col>

      <Col span={24}>
        <SelectSearchField />
      </Col>

      <Col span={24}>
        <SelectMultipleSelection />
      </Col>

      <Col span={24}>
        <SelectSizes />
      </Col>

      <Col span={24}>
        <SelectCustomSelection />
      </Col>

      <Col span={24}>
        <SelectSearchSort />
      </Col>

      <Col span={24}>
        <SelectTags />
      </Col>

      <Col span={24}>
        <SelectOptionGroup />
      </Col>

      <Col span={24}>
        <SelectCoordinate />
      </Col>

      <Col span={24}>
        <SelectSearchBox />
      </Col>

      <Col span={24}>
        <SelectSelectedItem />
      </Col>

      <Col span={24}>
        <SelectAutomaticTokenization />
      </Col>

      <Col span={24}>
        <SearchSelectUsers />
      </Col>

      <Col span={24}>
        <SelectCustomDropdown />
      </Col>

      <Col span={24}>
        <SelectHideSelected />
      </Col>

      <Col span={24}>
        <SelectBorderedLess />
      </Col>

      <Col span={24}>
        <SelectCustomTagRender />
      </Col>

      <Col span={24}>
        <SelectResponsive />
      </Col>

      <Col span={24}>
        <SelectBigData />
      </Col>
    </Row>
  );
}
