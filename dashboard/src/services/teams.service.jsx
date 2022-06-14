import axios from 'axios';

const ListClientUsers = clientId => {
  return axios.get(`/api/v1/clients/${clientId}/clientUsers`);
};
const ListInvitations = clientId => {
  return axios.get(`/api/v1/clients/${clientId}/clientUserInvitations`);
};
const AddClientUsers = (clientId, data) => {
  return axios.post(`/api/v1/clients/${clientId}/clientUsers`, data);
};
const UpdateClientUsersRole = (clientId, clientUserId, data) => {
  return axios.put(
    `/api/v1/clients/${clientId}/clientUsers/${clientUserId}`,
    data
  );
};
const RemoveClientUsers = (clientId, clientUserId) => {
  return axios.delete(
    `/api/v1/clients/${clientId}/clientUsers/${clientUserId}`
  );
};
const RemoveInvitation = (clientId, invitationId) => {
  return axios.delete(
    `/api/v1/clients/${clientId}/clientUserInvitations/${invitationId}`
  );
};
const UpdateClientUsersInvitation = (clientId, data) => {
  return axios.put(`/api/v1/clients/${clientId}/clientUsers`, data);
};
const ResendInvitation = invitationId => {
  return axios.post(`/api/v1/invitations/${invitationId}/resend`, {});
};

export {
  AddClientUsers,
  RemoveClientUsers,
  ListClientUsers,
  UpdateClientUsersRole,
  ListInvitations,
  RemoveInvitation,
  UpdateClientUsersInvitation,
  ResendInvitation,
};
