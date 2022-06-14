import axios from 'axios';

const ListAllPlans = billingCycle => {
  return axios.get(`/api/v1/plans?billingCycle=${billingCycle}`);
};

const ListAllInvoices = clientId => {
  return axios.get(`/api/v1/clients/${clientId}/subscription/payments`);
};

const GetSubscriptionDetails = clientId => {
  return axios.get(`/api/v1/clients/${clientId}/subscription`);
};

const ChangeSubscription = (clientId, data) => {
  return axios.put(`/api/v1/clients/${clientId}/subscription`, data);
};

export {
  ListAllPlans,
  ListAllInvoices,
  GetSubscriptionDetails,
  ChangeSubscription,
};
