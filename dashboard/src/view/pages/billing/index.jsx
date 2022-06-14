import { Button, Col, Row, Switch, Table, Modal, Form, Spin } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { handlePromise } from '../../../helpers/helpers';
import {
  BillingFetchInvoicesSuccess,
  BillingFetchPaymentDetailsSuccess,
  BillingFetchPlansSuccess,
} from '../../../redux/reducers/billing/billingActions';
import {
  ChangeSubscription,
  GetSubscriptionDetails,
  ListAllInvoices,
  ListAllPlans,
} from '../../../services/billing.service';
import { Toaster } from '../../../services/toaster.service';
import RadialbarChart from '../../components/widgets/charts/radialbarChart';
import { RiCloseFill } from 'react-icons/ri';
import useDebounce from '../../../hooks/useDebounce';

export default function ECommerce() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const Paddle = window.Paddle;

  const { users, billing, additionalFetch } = useSelector(
    ({ users, billing, additionalFetch }) => ({
      users: users,
      billing: billing,
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const [confirmationModalVisible, setconfirmationModalVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [productIdentifier, setProductIdentifier] = useState(null);

  const [checked, setChecked] = useState(
    billing?.paymentDetails?.currentSubscription?.package?.billingCycle
      ? billing?.paymentDetails?.currentSubscription?.package?.billingCycle ===
        'annually'
        ? false
        : true
      : true
  );

  const ifNotAdminShowErrorAndStopExecution = () => {
    const selectedClientId = additionalFetch.clientId;
    const selectedClient = additionalFetch.clients.filter(
      item => item.client.id === Number(selectedClientId)
    );

    // if role is admin or owner,has privileges
    if (selectedClient.length !== 0 && selectedClient[0].role !== 'user') {
      return false;
    }

    const toaster = new Toaster('error');
    toaster.title = 'Error';
    toaster.message = 'You do not have admin privileges';
    toaster.open();
    return true;
  };

  const preferanceModalShow = () => {
    setconfirmationModalVisible(true);
  };

  const confirmationModalCancel = () => {
    setconfirmationModalVisible(false);
    setLoading(false);
    form.resetFields();
  };

  const handleSubmit = async () => {
    setLoading(true);
    const clientId = additionalFetch.clientId;
    const data = {
      identifier: productIdentifier,
    };

    await handlePromise(() => ChangeSubscription(clientId, data));

    // payment details will only be updated in backend after some time
    setTimeout(async () => {
      await fetchSubscriptionDetails();
    }, 1000);

    setLoading(false);
    confirmationModalCancel();
  };

  const openCheckout = product => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution();
    if (stopExecution) return;

    const email = users.items.clientUser.email;
    const clientId = String(additionalFetch.clientId);
    const isFreePlan =
      billing.paymentDetails?.currentSubscription?.package?.isFree;
    const paymentDetails =
      billing.paymentDetails?.paddleDetails?.payment_information;

    // is paidPlan and there is paymentDetails in database
    if (!isFreePlan && paymentDetails) {
      setProductIdentifier(product.identifier);
      preferanceModalShow();
      return;
    }

    const paddleData = {
      product: product.planCode,
      email,
      passthrough: clientId,
    };

    Paddle.Checkout.open(paddleData);
  };

  const handlePaddleCheckout = override => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution();
    if (stopExecution) return;

    Paddle.Checkout.open({
      override,
    });
  };

  const fetchSubscriptionDetails = useCallback(async () => {
    const clientId = additionalFetch.clientId;
    let [results, error] = await handlePromise(() =>
      GetSubscriptionDetails(clientId)
    );
    if (error) return;
    dispatch(BillingFetchPaymentDetailsSuccess(results));
  }, [additionalFetch.clientId, dispatch]);

  const getAllPlansAndStoreInRedux = useCallback(
    async (billingCycle = 'monthly') => {
      let [results, error] = await handlePromise(() =>
        ListAllPlans(billingCycle)
      );

      if (error) {
        return;
      }

      const resultWithKey = results.reduce((prev, current) => {
        if (current.name === '' || current.price === 0) return prev;
        return [...prev, { ...current, key: current.id }];
      }, []);

      const resultWithKeySortedAccordingToPrice = resultWithKey.sort(
        (a, b) => a.price - b.price
      );

      dispatch(BillingFetchPlansSuccess(resultWithKeySortedAccordingToPrice));
    },
    [dispatch]
  );

  const handlePlanTimeChange = async value => {
    let billingCycle;

    if (value === false) {
      billingCycle = 'annually';
    }

    if (value === true) {
      billingCycle = 'monthly';
    }

    await getAllPlansAndStoreInRedux(billingCycle);
    setChecked(value);
  };

  const optimisedHandlePlanTimeChange = useDebounce(handlePlanTimeChange);

  // invoice
  const invoiceColumns = [
    {
      title: 'Date',
      dataIndex: 'payout_date',
      key: 'payout_date',
      width: '33%',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: text => <span>{`$${text}`}</span>,
      width: '33%',
    },
    {
      title: 'Download',
      key: 'receipt_url',
      dataIndex: 'receipt_url',
      render: receipt_url => {
        return (
          <Button type="primary">
            <a href={receipt_url} target="_blank" rel="noreferrer">
              Download Pdf
            </a>
          </Button>
        );
      },
      width: '33%',
    },
  ];

  // billing
  const subscriptionColumns = [
    {
      title: 'Plan',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '40%',
      render: (txt, record) => {
        let subscriptionTime = 'mo';
        if (record.billingCycle === 'annually') {
          subscriptionTime = 'yr';
        }

        return <span>{`$${record.price}/${subscriptionTime}`}</span>;
      },
    },
    {
      title: '',
      key: 'planCode',
      dataIndex: 'planCode',
      render: (txt, record) => {
        let currentPlan = false;
        let isFreePlan = false;
        const planPrice = record.price;
        const selectedPlanPrice =
          billing?.paymentDetails?.currentSubscription?.package?.price;

        if (billing?.paymentDetails?.currentSubscription?.package?.isFree) {
          isFreePlan = true;
        }

        if (billing?.paymentDetails?.currentSubscription) {
          currentPlan =
            billing.paymentDetails.currentSubscription.package.identifier ===
            record.identifier;
        }

        return (
          <Button
            disabled={currentPlan}
            onClick={() => openCheckout(record)}
            type="primary"
          >
            {isFreePlan
              ? 'Subscribe'
              : currentPlan
              ? 'Current Plan'
              : planPrice < selectedPlanPrice
              ? 'Downgrade'
              : 'Upgrade'}
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    fetchSubscriptionDetails();
  }, [additionalFetch.clientId, dispatch, fetchSubscriptionDetails]);

  useEffect(() => {
    const fetchPlans = async () => {
      let billingCycle;

      if (
        billing?.paymentDetails?.currentSubscription?.package?.billingCycle ===
        'annually'
      ) {
        billingCycle = 'annually';
        setChecked(false);
      } else {
        billingCycle = 'monthly';
        setChecked(true);
      }

      await getAllPlansAndStoreInRedux(billingCycle);
    };

    fetchPlans();
  }, [getAllPlansAndStoreInRedux, billing.paymentDetails.currentSubscription]);

  useEffect(() => {
    const fetchAllInvoices = async () => {
      const clientId = additionalFetch.clientId;

      let [results, error] = await handlePromise(() =>
        ListAllInvoices(clientId)
      );
      if (error) return;

      const resultWithKey = results.response.reduce((prev, current) => {
        if (current.is_paid === 0 || current.amount === 0) return prev;
        return [...prev, { ...current, key: current.id }];
      }, []);

      dispatch(BillingFetchInvoicesSuccess(resultWithKey));
    };

    fetchAllInvoices();
  }, [additionalFetch.clientId, dispatch]);

  return (
    <>
      <Modal
        title={'Confirmation'}
        width={316}
        centered
        visible={confirmationModalVisible}
        onCancel={confirmationModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form
          onFinish={handleSubmit}
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{}}
        >
          <Form.Item>
            <p>
              Your subscription plan will be switched instantly and your card
              will be charged now at a pro-rated rate. Are you sure? If you have
              any questions, please contact{' '}
              <a href="#">support@engagespot.co</a>
            </p>
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="da-pr-sm-0 da-pr-12">
              <Button disabled={loading} block type="primary" htmlType="submit">
                {loading ? <Spin /> : 'Confirm'}
              </Button>
            </Col>

            <Col md={12} span={24} className="da-mt-sm-12 da-pl-sm-0 da-pl-12">
              <Button block onClick={confirmationModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Row gutter={[32, 0]}>
        <Col span={24}>
          <Row align="middle">
            <Col md={12} span={12}>
              <h4>Billing</h4>
              <p>
                To see detailed pricing and comparison, check out our pricing
                page.
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="da-mt-32">
          <div className="csm-mb-32">
            <h4 className="csm-mb-15">Subscription Plans</h4>
            <div className="custom_card">
              <div className="da-mt-16 da-d-flex">
                <div className="da-mr-16">Yearly</div>
                <Switch
                  checked={checked}
                  onChange={value => optimisedHandlePlanTimeChange(value)}
                />
                <div className="da-ml-16">Monthly</div>
              </div>

              <div className="da-mt-32">
                <Table
                  pagination={false}
                  columns={subscriptionColumns}
                  dataSource={[...billing.plans]}
                />
              </div>
            </div>
          </div>

          {Object.keys(billing.paymentDetails).length !== 0 && (
            <div className="csm-mb-32">
              <h4 className="csm-mb-15">Monthly Users</h4>
              <div className="custom_card csm-pd-0">
                <RadialbarChart
                  currentMonthlyUsers={billing.paymentDetails.usage.mau}
                  maxMonthlyUser={
                    billing.paymentDetails.currentSubscription.package
                      .subscriberLimit
                  }
                />
              </div>
            </div>
          )}

          {Object.keys(billing.paymentDetails).length !== 0 &&
            billing.paymentDetails.currentSubscription.package.isFree ===
              false &&
            billing.paymentDetails.paddleDetails &&
            billing.paymentDetails.paddleDetails.payment_information && (
              <div className="csm-mb-32">
                <h4 className="csm-mb-15">Payment Information</h4>
                <div className="custom_card">
                  <div>
                    {billing.paymentDetails.paddleDetails.payment_information
                      .payment_method === 'paypal' ? (
                      <span>{'Your current payment method is Paypal. '}</span>
                    ) : (
                      <span>
                        Your current payment method is a credit card ending in
                        <span className="csm-highlighted-text">{` ${billing.paymentDetails.paddleDetails.payment_information.last_four_digits} `}</span>
                        that expires on
                        <span className="csm-highlighted-text">{` ${billing.paymentDetails.paddleDetails.payment_information.expiry_date}. `}</span>
                      </span>
                    )}
                    Your Next Payment Date is on
                    <span className="csm-highlighted-text">{` ${billing.paymentDetails.currentSubscription.nextBillingOn}.`}</span>
                  </div>

                  <div className="da-mt-16">
                    <Button
                      onClick={() =>
                        handlePaddleCheckout(
                          billing.paymentDetails.currentSubscription.updateUrl
                        )
                      }
                      type="primary"
                    >
                      Update Payment Information
                    </Button>
                  </div>
                </div>
              </div>
            )}

          {Object.keys(billing.paymentDetails).length !== 0 &&
            billing.paymentDetails.currentSubscription.package.isFree ===
              false && (
              <div className="csm-mb-32">
                <h4 className="csm-mb-15">Cancel Subscription</h4>
                <div className="custom_card">
                  {billing.paymentDetails.currentSubscription.status ===
                  'active' ? (
                    <>
                      <div>
                        You may cancel your subscription at any time. Once your
                        subscription has been cancelled, you will have the
                        option to resume the subscription until the end of your
                        current billing cycle.
                      </div>
                      <div className="da-mt-16">
                        <Button
                          onClick={() =>
                            handlePaddleCheckout(
                              billing.paymentDetails.currentSubscription
                                .cancelUrl
                            )
                          }
                          type="primary"
                        >
                          Cancel Subscription
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div>
                      Your plan have been cancelled. But you can still use the
                      paid plan until
                      <span className="csm-highlighted-text">{`
                            ${moment
                              .utc(
                                billing.paymentDetails.currentSubscription
                                  .cancellationEffectiveDate
                              )
                              .format('YYYY-MM-DD')}
                           `}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

          {Object.keys(billing.invoices).length !== 0 &&
            billing.invoices.length !== 0 && (
              <div className="csm-mb-32">
                <h4 className="csm-mb-15">Invoices</h4>
                <div className="custom_card">
                  <div>View and download your invoices here.</div>
                  <div className="da-mt-16">
                    <Table
                      pagination={{ pageSize: 5 }}
                      columns={invoiceColumns}
                      dataSource={billing.invoices}
                    />
                  </div>
                </div>
              </div>
            )}
        </Col>
      </Row>
    </>
  );
}
