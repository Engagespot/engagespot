import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Spin,
  Table,
  Tooltip,
  Menu,
} from 'antd';
import React, { useEffect, useState, useCallback } from 'react';
import { Delete, EditSquare, TimeCircle } from 'react-iconly';
import { RiCloseFill, RiSearchLine } from 'react-icons/ri';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  SetClientUserFetchSuccess,
  SetInvitationsFetchSuccess,
  SetShownInvitationsOnce,
} from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import {
  AddClientUsers,
  ListClientUsers,
  ListInvitations,
  RemoveClientUsers,
  RemoveInvitation as RemoveInvitationFromServer,
  ResendInvitation,
  UpdateClientUsersRole,
} from '../../../services/teams.service';
import { Select } from 'antd';
import { Toaster } from '../../../services/toaster.service';
import {
  handleError,
  handlePromise,
  ifNotAdminShowErrorAndStopExecution,
} from '../../../helpers/helpers';
import { EMAIL_PATTERN } from '../../../services/utlis';

export default function Teams() {
  const dispatch = useDispatch();
  const { additionalFetch, users } = useSelector(
    ({ additionalFetch, users }) => ({
      additionalFetch: additionalFetch,
      users: users,
    }),
    shallowEqual
  );

  const { Option } = Select;
  const [form] = Form.useForm();

  const [clientUsersToDisplay, setClientUsersToDisplay] = useState(
    additionalFetch.clientUsers
  );
  const [preferanceModalVisible, setPreferanceModalVisible] = useState(false);
  const [selectedClientUserId, setSelectedClientUserId] = useState(null);
  const [modalType, setModalType] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showInvitations, setShowInvitations] = useState(false);
  const [resendInvitationTo, setResendInvitationTo] = useState({
    email: null,
    role: null,
  });
  const [tableDataLoader, setTableDataLoader] = useState(false);

  const selectedClientId = additionalFetch.clientId;
  const selectedClient = additionalFetch.clients.filter(
    item => item.client.id === Number(selectedClientId)
  );

  const preferanceModalShow = modalType => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    setPreferanceModalVisible(true);
    setModalType(modalType);
  };

  const preferanceModalCancel = () => {
    setPreferanceModalVisible(false);
    form.resetFields();
  };

  const handleEditAccountType = (modalType, record) => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    const clientUserRole = record.role;
    setSelectedClientUserId(record.id);

    form.setFields([
      {
        name: 'role',
        value: clientUserRole,
      },
    ]);
    preferanceModalShow(modalType);
  };

  const handleEditResendInvitation = (modalType, record) => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    const clientUserEmail = record.email;
    const clientUserRole = record.role;
    const invitationId = record.id;

    setResendInvitationTo({
      email: clientUserEmail,
      role: clientUserRole,
      invitationId,
    });

    preferanceModalShow(modalType);
  };

  const getListOfClientUsersAndStoreInRedux = useCallback(
    async clientId => {
      let [result, error] = await handlePromise(() =>
        ListClientUsers(clientId)
      );
      if (error) return;

      const value = result.map(item => {
        return {
          ...item.clientUser,
          key: item.clientUser.id,
          role: item.role,
        };
      });

      const userId = users.items.clientUser.id;
      const sortedValueWithCurrentUserOnTop = value.sort(
        (a, b) => a.id !== userId
      );

      dispatch(SetClientUserFetchSuccess(sortedValueWithCurrentUserOnTop));
      setClientUsersToDisplay(value);
    },
    [dispatch, users.items.clientUser.id]
  );

  const fetchInvitationsAndStoreInRedux = useCallback(
    async clientId => {
      try {
        const results = await ListInvitations(clientId);
        const resultWithKey = results.map(result => {
          return {
            ...result,
            key: result.id,
          };
        });

        dispatch(SetInvitationsFetchSuccess(resultWithKey));
      } catch (e) {
        handleError(e);
      }
    },
    [dispatch]
  );

  const removeUser = async (txt, record) => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    const clientUserId = record.id;
    const clientId = additionalFetch.clientId;
    await handlePromise(() => RemoveClientUsers(clientId, clientUserId));
    getListOfClientUsersAndStoreInRedux(clientId);
  };

  const removeInvitation = async (txt, record) => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    const invitationId = record.id;
    const clientId = additionalFetch.clientId;
    await handlePromise(() =>
      RemoveInvitationFromServer(clientId, invitationId)
    );
    fetchInvitationsAndStoreInRedux(clientId);
  };

  const handleShowPendingInvitations = () => {
    if (showInvitations === false) {
      dispatch(SetShownInvitationsOnce(true));
    }

    setShowInvitations(!showInvitations);
  };

  const handleSearch = e => {
    const search = e.target.value;
    const filteredClientUsers = additionalFetch.clientUsers.filter(user => {
      return (
        user.firstName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
      );
    });

    setClientUsersToDisplay(filteredClientUsers);
  };

  const handleSubmit = async values => {
    setLoading(true);
    const clientId = additionalFetch.clientId;

    // modal 0 - add users
    // modal 1 -  edit user type
    // modal 2 -  resend invite

    if (modalType === 0) {
      const addClientUsersData = {
        ...values,
        clientUserEmail: values.clientUserEmail.replace(
          /^\s+|\s+$|\s+(?=\s)/g,
          ''
        ),
      };

      await handlePromise(() => AddClientUsers(clientId, addClientUsersData));
    }

    if (modalType === 1) {
      await handlePromise(() =>
        UpdateClientUsersRole(clientId, selectedClientUserId, values)
      );
    }

    if (modalType === 2) {
      const invitationId = resendInvitationTo.invitationId;
      await handlePromise(() => ResendInvitation(invitationId));

      const toaster = new Toaster('success');
      toaster.title = 'Sucess';
      toaster.message = 'Invitation Resend';
      toaster.open();
    }

    // fetching current data and displaying

    if (modalType === 0) {
      fetchInvitationsAndStoreInRedux(clientId);
    }

    if (modalType === 1) {
      getListOfClientUsersAndStoreInRedux(clientId);
    }

    setLoading(false);
    preferanceModalCancel();
  };

  const invitationsColumns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '33%',
    },
    {
      title: 'Type',
      dataIndex: 'role',
      key: 'role',
      width: '33%',
    },
    {
      title: 'Action',
      key: 'Action',
      dataIndex: 'Action',
      render: (txt, record) => {
        if (record.id === users.items.clientUser.id) return;

        return (
          <div className="csm-df">
            <Tooltip placement="bottom" title={'resend invitation'}>
              <Button
                onClick={ev => handleEditResendInvitation(2, record)}
                shape="circle"
                icon={<TimeCircle set="curved" />}
              />
            </Tooltip>

            <Popconfirm
              title="Are you sure to  remove this invitation?"
              onConfirm={ev => removeInvitation('delete', record)}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip placement="bottom" title={'delete'}>
                <Button
                  className="da-ml-12"
                  shape="circle"
                  icon={<Delete set="curved" />}
                />
              </Tooltip>
            </Popconfirm>
          </div>
        );
      },
      width: '33%',
    },
  ];

  const teamsColumns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
      width: '33%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '33%',
    },
    {
      title: 'Type',
      dataIndex: 'role',
      key: 'role',
      width: '33%',
    },
    {
      title: 'Action',
      key: 'Action',
      dataIndex: 'Action',
      render: (txt, record) => {
        if (record.id === users.items.clientUser.id) return;

        return (
          <div className="csm-df">
            <Tooltip placement="bottom" title={'change account type'}>
              <Button
                onClick={ev => handleEditAccountType(1, record)}
                shape="circle"
                icon={<EditSquare set="curved" />}
              />
            </Tooltip>

            <Popconfirm
              title="Are you sure to remove this user?"
              onConfirm={ev => removeUser('delete', record)}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip placement="bottom" title={'delete'}>
                <Button
                  className="da-ml-12"
                  shape="circle"
                  icon={<Delete set="curved" />}
                />
              </Tooltip>
            </Popconfirm>
          </div>
        );
      },
      width: '33%',
    },
  ];

  useEffect(() => {
    const fetchClientUsers = async () => {
      try {
        if (clientUsersToDisplay.length === 0) {
          setTableDataLoader(true);
        }

        const clientId = additionalFetch.clientId;
        await getListOfClientUsersAndStoreInRedux(clientId);

        setTableDataLoader(false);
      } catch (e) {
        //console.log(e);
      }
    };

    fetchClientUsers();
  }, [
    additionalFetch.clientId,
    getListOfClientUsersAndStoreInRedux,
    clientUsersToDisplay.length,
  ]);

  useEffect(() => {
    const clientId = additionalFetch.clientId;
    const selectedClient = additionalFetch.clients.filter(
      item => item.client.id == clientId
    );

    if (selectedClient.length !== 0 && selectedClient[0].role === 'user') {
      return;
    }

    fetchInvitationsAndStoreInRedux(clientId);
  }, [
    fetchInvitationsAndStoreInRedux,
    additionalFetch.clientId,
    additionalFetch.clients,
  ]);

  useEffect(() => {
    return () => {
      dispatch(SetShownInvitationsOnce(false));
    };
  }, [dispatch]);

  return (
    <>
      <Modal
        title={
          modalType === 0
            ? 'Invite Members'
            : modalType === 1
            ? 'Change User Type'
            : modalType === 2
            ? 'Resend Invitation'
            : ''
        }
        width={316}
        centered
        visible={preferanceModalVisible}
        onCancel={preferanceModalCancel}
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
          {modalType === 0 && (
            <>
              <Form.Item
                label={
                  <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                    Email :
                  </span>
                }
                name="clientUserEmail"
                rules={[
                  {
                    required: true,
                    message: 'Please enter an email!',
                  },
                  ({ getFieldValue }) => ({
                    validator: (_, value) => {
                      if (!value || value === '') return Promise.resolve();
                      else if (
                        value
                          .replace(/^\s+|\s+$|\s+(?=\s)/g, '')
                          .match(EMAIL_PATTERN)
                      )
                        return Promise.resolve();
                      else return Promise.reject(new Error('Invalid email'));
                    },
                    message: 'Invalid email',
                  }),
                ]}
              >
                <Input placeholder="enter an email " />
              </Form.Item>
            </>
          )}

          {modalType !== 2 && (
            <Form.Item
              label={
                <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                  Type :
                </span>
              }
              name="role"
              rules={[
                {
                  required: true,
                  message: 'Select an account type!',
                },
              ]}
            >
              <Select placeholder="select an account type">
                <Option value="admin">admin</Option>
                <Option value="user">user</Option>
              </Select>
            </Form.Item>
          )}

          {modalType === 2 && (
            <p className="csm-word-break-all">
              Are you sure you want to resend the invitation to{' '}
              <span className="csm-highlighted-text">
                {resendInvitationTo.email}
              </span>{' '}
              for a{' '}
              <span className="csm-highlighted-text">
                {resendInvitationTo.role}
              </span>{' '}
              role ?
            </p>
          )}

          <Row>
            <Col md={12} span={24} className="da-pr-sm-0 da-pr-12">
              <Button disabled={loading} block type="primary" htmlType="submit">
                {loading ? (
                  <Spin />
                ) : modalType === 0 ? (
                  'Invite'
                ) : modalType === 1 ? (
                  'Change'
                ) : modalType === 2 ? (
                  'Resend'
                ) : (
                  ''
                )}
              </Button>
            </Col>

            <Col md={12} span={24} className="da-mt-sm-12 da-pl-sm-0 da-pl-12">
              <Button block onClick={preferanceModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Row gutter={[32, 0]}>
        <Col span={24}>
          <Row align="middle">
            <Col md={24} span={24}>
              <h4>Teams</h4>
              <p>
                You can manage people who can access your workspace. Users with
                admin role can add others and manage billing
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div className="csm-team-header da-mb-16">
            <div>
              <Input
                onChange={e => handleSearch(e)}
                placeholder="Search by Name / Email"
                prefix={
                  <RiSearchLine className="site-form-item-icon da-text-color-black-80 da-text-color-dark-20" />
                }
              />
            </div>
            <div>
              <Button onClick={ev => preferanceModalShow(0)} type="primary">
                Invite Member
              </Button>
            </div>
          </div>
        </Col>

        {additionalFetch.invitations.length !== 0 && (
          <Col className="da-mb-16" span={24}>
            <Menu
              style={{
                width: 230,
                borderRadius: '8px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.SubMenu
                onTitleClick={handleShowPendingInvitations}
                style={{ width: '100%' }}
                key="sub1"
                title={`${additionalFetch.invitations.length} Pending Invitations`}
              ></Menu.SubMenu>
            </Menu>
          </Col>
        )}

        {additionalFetch.invitations.length !== 0 && (
          <Col
            span={24}
            className={`${
              additionalFetch.shownInvitationsOnce
                ? showInvitations
                  ? 'csm-visible'
                  : 'csm-hidden'
                : 'csm-erased'
            }`}
          >
            <div className="custom_card">
              <h4>Pending Invitations</h4>
              <div className="da-mt-16">
                <Table
                  pagination={{ pageSize: 5 }}
                  columns={invitationsColumns}
                  dataSource={additionalFetch.invitations}
                />
              </div>
            </div>
          </Col>
        )}

        <Col span={24} className="da-mb-32">
          <div className="custom_card">
            <h4>Team Members</h4>
            <div className="da-mt-16">
              <Table
                pagination={{ pageSize: 5 }}
                columns={teamsColumns}
                dataSource={clientUsersToDisplay}
                loading={tableDataLoader}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
