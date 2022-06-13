import React from 'react';
import { useSelector } from 'react-redux';

import { Row, Col, Card, Button } from 'antd';
import { Download } from 'react-iconly';

import cardImg from '../../../../../assets/images/dasboard/analytics-download-bg.png';
import cardImgDark from '../../../../../assets/images/dasboard/analytics-download-bg-dark.png';
import cardVectorImg from '../../../../../assets/images/dasboard/analytics-download-vector.svg';

export default function DownloadCard() {
  // Redux
  const theme = useSelector(state => state.customise.theme);

  return (
    <Card
      className="da-border-none da-mb-32 da-card-2 da-px-12 da-py-16 da-upgradePlanCardOne"
      style={{
        backgroundImage: `url(${theme == 'dark' ? cardImgDark : cardImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
      }}
    >
      <Row>
        <Col span={15}>
          <h5 className="da-mb-0 da-text-color-black-0">
            Check the Best Prices of New Models & Boost Your Business
          </h5>

          <Button
            className="da-mt-32 da-border-color-primary-1 da-bg-color-black-0 da-bg-color-dark-primary-1 da-text-color-primary-1 da-text-color-dark-0"
            icon={<Download className="remix-icon" />}
          >
            Download
          </Button>
        </Col>

        <img
          src={cardVectorImg}
          className="da-position-absolute-top-right da-h-100 da-rtl-scale-x-n1"
          alt="Check the Best Prices of New Models & Boost Your Business"
        />
      </Row>
    </Card>
  );
}
