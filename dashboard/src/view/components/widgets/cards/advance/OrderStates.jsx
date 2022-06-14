import React from 'react';

import { Card, Row, Col } from 'antd';
import Chart from 'react-apexcharts';

import chrome from '../../../../../assets/images/browser/chrome.svg';
import safari from '../../../../../assets/images/browser/safari.svg';
import opera from '../../../../../assets/images/browser/opera.svg';
import edge from '../../../../../assets/images/browser/edge.svg';
import firefox from '../../../../../assets/images/browser/firefox.svg';

export default function OrderStates({ data }) {
  const referenceNumber = data.wes_reference_no
    ? data.wes_reference_no
    : data.other_reference_no
    ? data.other_reference_no
    : 'reference number not specified';

  const statesArr = [
    {
      title: 'University Details',
      value: '',
    },
    {
      title: 'Location',
      value: data.location.name,
    },
    {
      title: 'University',
      value: data.university.name,
    },
    {
      title: 'Service',
      value: data.service.name,
    },
    {
      title: 'Reference Number',
      value: referenceNumber,
    },
    {
      title: 'Contact Detail',
      value: '',
    },
    {
      title: 'Name',
      value: data.student_details.student_name,
    },
    {
      title: 'Gender',
      value: data.student_details.gender,
    },
    {
      title: 'Address (Present)',
      value: data.student_details.contact_address,
    },
    {
      title: 'Date Of Birth',
      value: data.student_details.dob,
    },
    {
      title: 'Mobile Number',
      value: data.student_details.mobile,
    },
    {
      title: 'Email',
      value: data.student_details.email,
    },
    {
      title: 'Academic Details',
      value: '',
    },
    {
      title: 'Programme',
      value: data.student_academic_details.programme,
    },
    {
      title: 'Admission Year',
      value: data.student_academic_details.admission_year,
    },
    {
      title: 'College',
      value: data.student_academic_details.college,
    },
    {
      title: 'Is Autonomous',
      value:
        data.student_academic_details.is_autonomous === 1 ? 'True' : 'False',
    },
    {
      title: 'Course',
      value: data.student_academic_details.cource,
    },
    {
      title: 'Registration Number',
      value: data.student_academic_details.register_no,
    },
    {
      title: 'Year Of Completion',
      value: data.student_academic_details.result_publication_date,
    },
    {
      title: 'Applied For Revaluation/Scrutiny',
      value:
        data.student_academic_details.applied_revaluation === 1
          ? 'True'
          : 'False',
    },
    {
      title: 'Waiting For Revaluation/Scrutiny',
      value:
        data.student_academic_details.waiting_revaluation === 1
          ? 'True'
          : 'False',
    },
    {
      title: 'Additional Info',
      value: data.additional_info,
    },
    {
      title: 'Delivery Details',
      value: '',
    },
    {
      title: 'Address Line 1',
      value: `${data.addresses_meta[0].address_line_one}`,
    },
    {
      title: 'Address Line 2',
      value: `${data.addresses_meta[0].address_line_two}`,
    },
    {
      title: 'City',
      value: `${data.addresses_meta[0].city}`,
    },
    {
      title: 'State',
      value: `${data.addresses_meta[0].state}`,
    },
    {
      title: 'Country',
      value: `${data.addresses_meta[0].country}`,
    },
    {
      title: 'Zip',
      value: `${data.addresses_meta[0].zip_code}`,
    },
    {
      title: 'Shipping Mode',
      value: data.shipping_mode.name,
    },
    {
      title: 'Order Status',
      value: data.order_status.status,
    },
  ];

  const renderStates = () => {
    return statesArr.map(state => {
      const headingStyles = {
        color: '#0c7434',
        fontSize: '18px',
      };

      return (
        <div key={state.title}>
          <Row justify="space-between" className="da-mt-12">
            <Col span={12}>
              <Row>
                <h5 style={state.value === '' ? headingStyles : {}}>
                  {state.title}
                </h5>
              </Row>
            </Col>
            <Col className="da-text-right" span={12}>
              <Row>
                <p
                  style={{ fontSize: '15px' }}
                  className="da-text-color-black-100 da-mb-0 "
                >
                  {state.value}
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      );
    });
  };

  return <>{renderStates()}</>;
}
