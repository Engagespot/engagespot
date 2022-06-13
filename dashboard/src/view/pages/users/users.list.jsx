import { useRef, useState } from 'react';
import {
  Row,
  Col,
  Form,
  Button,
  Table,
  Popconfirm,
  Tag,
  Avatar,
  Modal,
  Input,
} from 'antd';
import { shallowEqual, useSelector } from 'react-redux';

import { formatDate } from '../../../services/utlis';
import { ApiConfig } from '../../../services/api.config';
import {
  CloseSquare,
  Delete,
  TickSquare,
  EditSquare,
  Show,
} from 'react-iconly';
import { Tooltip } from 'antd';

export const ProductList = ({ users, selectItem, loading }) => {
  const [form] = Form.useForm();
  const remarkSaveBtn = useRef();
  const [isModalVisible, toggleModal] = useState(false);
  const [selectedRec, setSelectedRec] = useState(false);
  const { isAdmin } = useSelector(
    ({ auth }) => ({
      isAdmin: auth.user,
    }),
    shallowEqual
  );

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
    },
    {
      title: 'User Type',
      dataIndex: ['user_type', 'name'],
    },
    {
      title: 'Account Status',
      dataIndex: 'account_status',
    },
    {
      render: record => (
        <>
          {isAdmin && (
            <>
              <Tooltip placement="bottom" title={'change account status'}>
                <Button
                  onClick={ev => selectItem('edit', record)}
                  shape="circle"
                  icon={<EditSquare set="curved" />}
                />
              </Tooltip>
            </>
          )}

          <Popconfirm
            title="Are you sure to remove this user?"
            onConfirm={ev => selectItem('delete', record)}
            onCancel={ev => console.log('Cancelled')}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <Tooltip placement="bottom" title={'delete'}>
                <Button
                  className="da-ml-12"
                  shape="circle"
                  icon={<Delete set="curved" />}
                />
              </Tooltip>
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];
  return (
    <>
      <Col span={24}>
        <Col className="da-contact-card">
          <Table
            loading={loading}
            pagination={{ defaultPageSize: 10 }}
            columns={columns}
            dataSource={users}
            scroll={{ x: 'calc(500px + 50%)' }}
            rowKey={record => 'product' + record.id}
          />
        </Col>
      </Col>
      <Modal
        title="Remarks"
        visible={isModalVisible}
        onOk={() => {
          remarkSaveBtn.current.click();
        }}
        onCancel={() => {
          form.resetFields();
          toggleModal(false);
        }}
      >
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remarks: '',
          }}
          onFinish={values => {
            //console.log(values);
            form.resetFields();
            toggleModal(false);
            selectItem('reject', selectedRec, values);
            setSelectedRec(null);
          }}
          onFinishFailed={err => {
            //console.log(err);
          }}
          form={form}
        >
          <Row gutter={[16]}>
            <Col span={24}>
              <Form.Item
                label="Enter some remarks regarding the rejection"
                name="remarks"
                rules={[{ required: true, message: 'Remarks is required' }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Button hidden htmlType="submit" ref={remarkSaveBtn} hidden>
              Save
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
