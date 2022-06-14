import React from 'react';

import { Card, Row, Col } from 'antd';

import watch from '../../../../../assets/images/product/watch-1.png';
import polaroid from '../../../../../assets/images/product/white-cam-1.png';
import headphone from '../../../../../assets/images/product/wireless-bluetooth-1.png';
import xboxController from '../../../../../assets/images/product/xbox-1.png';

export default function categoriesOfTheWeek() {
  const categories = [
    {
      name: 'Sports',
      sales: 9000,
      img: <img src={watch} alt="Sports" />,
    },
    {
      name: 'Tech',
      sales: 15000,
      img: <img src={xboxController} alt="Tech" />,
    },
    {
      name: 'Home',
      sales: 10000,
      img: <img src={headphone} alt="Home" />,
    },
    {
      name: 'Style',
      sales: 12000,
      img: <img src={polaroid} alt="Style" />,
    },
  ];

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-2">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row justify="space-between" align="top">
            <h5 className="da-mb-16">Categories of the week</h5>
          </Row>
        </Col>

        <Col span={24}>
          <Row
            className="da-categoriesOfTheWeek"
            gutter={[24, 24]}
            justify="space between"
          >
            {categories.map((category, index) => (
              <Col key={index} span={12}>
                <Row align="middle">
                  <div className="da-bg-color-black-20 da-bg-color-dark-70 da-p-4 da-img-container">
                    {category.img}
                  </div>

                  <div>
                    <p className="da-mb-4 da-text-color-black-100 da-text-color-dark-0 da-badge-text da-font-weight-500">
                      {category.sales / 1000}K Sales
                    </p>

                    <p className="da-mb-0 da-text-color-black-80 da-text-color-dark-30 da-input-description">
                      {category.name}
                    </p>
                  </div>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
