import React from 'react';

import { useSelector } from 'react-redux';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../../layout/components/content/page-title';
import CategoriesOfTheWeek from './categoriesOfTheWeek';
import EcommerceCardOne from './eCommerceCardOne';
import BrowserStates from './browserStates';
import BestSellingCategories from './bestSellingCategories';
import AttendenceCard from './attendenceCard';
import EcommerceCardTwo from './eCommerceCardTwo';
import CreditCard from './creditCard';
import WelcomeCard from './welcomeCard';
import ApplicationCard from './applicationCard';
import UpgradePlanCardOne from './upgradePlanCardOne';
import CtaCardOne from './ctaCardOne';
import CtaCardTwo from './ctaCardTwo';
import SubscribeCard from './subscribeCard';
import EcommerceCardThree from './eCommerceCardThree';
import EcommerceCardFour from './eCommerceCardFour';
import EcommerceCardFive from './eCommerceCardFive';
import EcommerceCardSix from './eCommerceCardSix';
import MeetingCard from './meetingCard';
import NotificationCardOne from './notificationCardOne';
import NotificationCardTwo from './notificationCardTwo';
import SocailMediaCard from './socialMediaCard';
import ProjectTableCard from './projectTableCard';
import UploadCard from './uploadCard';
import OrderlistTableCard from './orderListTableCard';

import welcomeCard1 from '../../../../../assets/images/illustrations/welcome-illustration-1.svg';
import welcomeCard2 from '../../../../../assets/images/illustrations/welcome-illustration-2.svg';
import welcomeCard3 from '../../../../../assets/images/illustrations/welcome-illustration-3.svg';
import welcomeCard4 from '../../../../../assets/images/illustrations/welcome-illustration-4.svg';
import welcomeCard5 from '../../../../../assets/images/illustrations/welcome-illustration-5.svg';
import welcomeCardDark1 from '../../../../../assets/images/illustrations/welcome-illustration-dark-1.svg';
import welcomeCardDark2 from '../../../../../assets/images/illustrations/welcome-illustration-dark-2.svg';
import welcomeCardDark3 from '../../../../../assets/images/illustrations/welcome-illustration-dark-3.svg';
import welcomeCardDark4 from '../../../../../assets/images/illustrations/welcome-illustration-dark-4.svg';

export default function Advance() {
  const theme = useSelector(state => state.customise.theme);

  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Widgets"
            breadCrumbParent3="YodaCards"
            breadCrumbActive=" Advance"
          />

          <PageTitle
            pageTitle="Advance Cards"
            pageText="You can find special cards we designed for Yoda Admin Template"
          />
        </Row>
      </Col>

      <Col xl={8} sm={12} xs={24}>
        <CategoriesOfTheWeek />
        <BestSellingCategories />
      </Col>

      <Col xl={8} sm={12} xs={24}>
        <EcommerceCardOne />
        <AttendenceCard />
      </Col>

      <Col xl={8} sm={12} xs={24}>
        <BrowserStates />
        <EcommerceCardTwo />
      </Col>

      <Col sm={12} xs={24}>
        <CreditCard />
      </Col>

      <Col xl={12} xs={24}>
        <ApplicationCard />
        <UpgradePlanCardOne />
      </Col>

      <Col xl={8} xs={24}>
        <CtaCardOne />
      </Col>

      <Col xl={8} xs={24}>
        <CtaCardTwo />
      </Col>

      <Col xl={8} xs={24}>
        <SubscribeCard />
      </Col>

      <Col xl={18} xs={24}>
        <EcommerceCardThree />
        <EcommerceCardSix />
      </Col>

      <Col xl={6} xs={24}>
        <EcommerceCardFour />
        <EcommerceCardFive />
      </Col>

      <Col xl={8} xs={24}>
        <UploadCard />
      </Col>

      <Col xl={16} xs={24}>
        <OrderlistTableCard />
      </Col>

      <Col xl={8} xs={24}>
        <SocailMediaCard />
      </Col>

      <Col xl={16} xs={24}>
        <ProjectTableCard />
      </Col>

      <Col xl={8} xs={24}>
        <MeetingCard />
      </Col>

      <Col xl={8} xs={24}>
        <NotificationCardOne />
      </Col>

      <Col xl={8} xs={24}>
        <NotificationCardTwo />
      </Col>

      <Col xl={12} xs={24}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <WelcomeCard
              title="Congratulations⚡️"
              subTitle="You're close to achieving your goal"
              price="23.000.00"
              percent="30"
              image={theme == 'light' ? welcomeCard1 : welcomeCardDark1}
            />
          </Col>

          <Col span={24}>
            <WelcomeCard
              title="Congratulations⚡️"
              subTitle="You're close to achieving your goal"
              price="23.000.00"
              percent="30"
              image={theme == 'light' ? welcomeCard2 : welcomeCardDark2}
            />
          </Col>
        </Row>
      </Col>

      <Col xl={12} xs={24}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <WelcomeCard
              title="Congratulations⚡️"
              subTitle="You're close to achieving your goal"
              price="23.000.00"
              percent="30"
              image={theme == 'light' ? welcomeCard3 : welcomeCardDark3}
            />
          </Col>

          <Col span={24}>
            <WelcomeCard
              title="Congratulations⚡️"
              subTitle="You're close to achieving your goal"
              price="23.000.00"
              percent="30"
              image={theme == 'light' ? welcomeCard4 : welcomeCardDark4}
            />
          </Col>
        </Row>
      </Col>

      <Col xl={12} xs={24}>
        <WelcomeCard
          title="Congratulations⚡️"
          subTitle="You're close to achieving your goal"
          price="23.000.00"
          percent="30"
          image={welcomeCard5}
        />
      </Col>
    </Row>
  );
}
