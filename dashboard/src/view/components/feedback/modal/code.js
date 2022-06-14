export const basic = `
import React, { useState } from "react";

import { Button, Modal } from "antd";
import { RiCloseFill } from "react-icons/ri";

const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

return (
  <>
    <Button type="primary" onClick={showModal}>
      Open Modal
    </Button>

    <Modal
      title={<h5 className="da-mb-0">Basic Modal</h5>}
      width={416}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        <>
          <Button type="text" key="back" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleOk}>
            Confirm
          </Button>
        </>
      }
      closeIcon={
        <RiCloseFill
          className="remix-icon text-color-black-100"
          size={24}
        />
      }
    >
      <p className="da-p2-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex
        turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
      </p>
    </Modal>
  </>
);
`;

export const confirmation = `
import { Button, Modal } from "antd";
import { RiInformationLine } from "react-icons/ri";

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: (
      <h5 className="da-mb-0 da-font-weight-500">
        Do you Want to delete these items?
      </h5>
    ),
    icon: (
      <span className="remix-icon">
        <RiInformationLine />
      </span>
    ),
    content: (
      <p className="da-p1-body da-text-color-black-80">Some descriptions</p>
    ),
    onOk() {},
    onCancel() {},
  });
}

function showPromiseConfirm() {
  confirm({
    title: (
      <h5 className="da-mb-0 da-font-weight-500">
        Do you Want to delete these items?
      </h5>
    ),
    icon: (
      <span className="remix-icon">
        <RiInformationLine />
      </span>
    ),
    content: (
      <p className="da-p1-body da-text-color-black-80">
        When clicked the OK button, this dialog will be closed after 1 second
      </p>
    ),
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {},
  });
}

function showDeleteConfirm() {
  confirm({
    title: (
      <h5 className="da-mb-0 da-font-weight-500">
        Are you sure delete this task?
      </h5>
    ),
    icon: (
      <span className="remix-icon">
        <RiInformationLine />
      </span>
    ),
    content: (
      <p className="da-p1-body da-text-color-black-80">Some descriptions</p>
    ),
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {},
    onCancel() {},
  });
}

function showPropsConfirm() {
  confirm({
    title: (
      <h5 className="da-mb-0 da-font-weight-500">
        Are you sure delete this task?
      </h5>
    ),
    icon: (
      <span className="remix-icon">
        <RiInformationLine />
      </span>
    ),
    content: (
      <p className="da-p1-body da-text-color-black-80">Some descriptions</p>
    ),
    okText: "Yes",
    okType: "danger",
    okButtonProps: {
      disabled: true,
    },
    cancelText: "No",
    onOk() {},
    onCancel() {},
  });
}

return (
  <>
    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showConfirm}
    >
      Confirm
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showPromiseConfirm}
    >
      With promise
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showDeleteConfirm}
    >
      Delete
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showPropsConfirm}
    >
      With extra props
    </Button>
  </>
);
`;

export const information = `
import { Button, Modal } from "antd";
import {
  RiCheckboxCircleLine,
  RiAlertLine,
  RiInformationLine,
} from "react-icons/ri";

function info() {
  Modal.info({
    icon: (
      <span className="remix-icon">
        <RiInformationLine />
      </span>
    ),
    title: (
      <h5 className="da-mb-0 da-font-weight-500">This is Info message</h5>
    ),
    content: (
      <div>
        <p className="da-p1-body da-text-color-black-80">Some contents.</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    icon: (
      <span className="remix-icon">
        <RiCheckboxCircleLine />
      </span>
    ),
    title: (
      <h5 className="da-mb-0 da-font-weight-500">This is Success message</h5>
    ),
    content: (
      <div>
        <p className="da-p1-body da-text-color-black-80">Some contents.</p>
      </div>
    ),
  });
}

function error() {
  Modal.error({
    icon: (
      <span className="remix-icon">
        <RiAlertLine />
      </span>
    ),
    title: (
      <h5 className="da-mb-0 da-font-weight-500">This is Error message</h5>
    ),
    content: (
      <div>
        <p className="da-p1-body da-text-color-black-80">Some contents.</p>
      </div>
    ),
  });
}

function warning() {
  Modal.warning({
    icon: (
      <span className="remix-icon">
        <RiAlertLine />
      </span>
    ),
    title: (
      <h5 className="da-mb-0 da-font-weight-500">This is Warning message</h5>
    ),
    content: (
      <div>
        <p className="da-p1-body da-text-color-black-80">Some contents.</p>
      </div>
    ),
  });
}

return (
  <>
    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={info}
    >
      Info
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={success}
    >
      Success
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={error}
    >
      Error
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={warning}
    >
      Warning
    </Button>
  </>
);
`;

export const position = `
import React, { useState } from "react";

import { Button, Modal } from "antd";
import { RiCloseFill } from "react-icons/ri";

const [modal1Visible, setIsModal1Visible] = useState(false);
const [modal2Visible, setIsModal2Visible] = useState(false);

function setModal1Visible(modal1Visible) {
  setIsModal1Visible(modal1Visible);
}

function setModal2Visible(modal2Visible) {
  setIsModal2Visible(modal2Visible);
}

return (
  <>
    <div>
      <Button type="primary" onClick={() => setModal1Visible(true)}>
        Modal dialog at 20px to Top
      </Button>

      <Modal
        title={<h5 className="da-mb-0">20px to Top</h5>}
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
        closeIcon={
          <RiCloseFill
            className="remix-icon text-color-black-100"
            size={24}
          />
        }
      >
        <p className="da-p2-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          vestibulum risus velit, ut placerat diam imperdiet nec. Aenean
          ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
        </p>
      </Modal>
    </div>

    <div className="da-mt-16">
      <Button type="primary" onClick={() => setModal2Visible(true)}>
        Vertically centered modal dialog
      </Button>

      <Modal
        title={<h5 className="da-mb-0">Vertically centered modal dialog</h5>}
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        closeIcon={
          <RiCloseFill
            className="remix-icon text-color-black-100"
            size={24}
          />
        }
      >
        <p className="da-p2-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          vestibulum risus velit, ut placerat diam imperdiet nec. Aenean
          ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
        </p>
      </Modal>
    </div>
  </>
);
`;

export const customWidth = `
import React, { useState } from "react";

import { Button, Modal } from "antd";
import { RiCloseFill } from "react-icons/ri";

const [visible, setVisible] = useState(false);

return (
  <>
    <Button type="primary" onClick={() => setVisible(true)}>
      Open Modal of 1000px width
    </Button>

    <Modal
      title={<h5 className="da-mb-0">Modal 1000px width</h5>}
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={1000}
      footer={
        <>
          <Button onClick={() => setVisible(false)} type="text">
            Cancel
          </Button>

          <Button onClick={() => setVisible(false)} type="primary">
            Confirm
          </Button>
        </>
      }
      closeIcon={
        <RiCloseFill
          className="remix-icon text-color-black-100"
          size={24}
        />
      }
    >
      <p className="da-p2-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex
        turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
      </p>
    </Modal>
  </>
);
`;

export const yoda = `
import React, { useState } from "react";

import { Row, Col, Form, Input, Checkbox, Button, Modal } from "antd";
import { RiCloseFill, RiMailAddLine } from "react-icons/ri";

import popUpImage from "../../../../assets/images/modal/pop-up.svg";

const [PopupModalVisible, setPopupModalVisible] = useState(false);
const [PopupWidthModalVisible, setPopupWidthModalVisible] = useState(false);
const [FormModalVisible, setFormModalVisible] = useState(false);
const [FormWidthModalVisible, setFormWidthModalVisible] = useState(false);

const showPopupModal = () => {
  setPopupModalVisible(true);
};

const showPopupWidthModal = () => {
  setPopupWidthModalVisible(true);
};

const showFormModal = () => {
  setFormModalVisible(true);
};

const showFormWidthModal = () => {
  setFormWidthModalVisible(true);
};

//--

const handlePopupOk = () => {
  setPopupModalVisible(false);
};

const handlePopupWidthOk = () => {
  setPopupWidthModalVisible(false);
};

const handleFormOk = () => {
  setFormModalVisible(false);
};

const handleFormWidthOk = () => {
  setFormWidthModalVisible(false);
};

//--

const handlePopupCancel = () => {
  setPopupModalVisible(false);
};

const handlePopupWidthCancel = () => {
  setPopupWidthModalVisible(false);
};

const handleFormCancel = () => {
  setFormModalVisible(false);
};

const handleFormWidthCancel = () => {
  setFormWidthModalVisible(false);
};

return (
  <>
    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showPopupModal}
    >
      Pop-up
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showPopupWidthModal}
    >
      Pop-up Width
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showFormModal}
    >
      Form
    </Button>

    <Button
      className="da-mb-16 da-mr-16"
      type="primary"
      ghost
      onClick={showFormWidthModal}
    >
      Form Width
    </Button>

    <Modal
      width={416}
      visible={PopupModalVisible}
      onCancel={handlePopupCancel}
      footer={false}
      closable={false}
      className="popup-modal"
    >
      <div className="da-text-center">
        <img src={popUpImage} alt="Pop-up" />
        <h3 className="da-text-color-dark-bg">Pop-up Title</h3>
        <p className="da-p2-body">
          Curabitur varius purus sed congue consectetur. Donec a leo
          malesuada,
        </p>
        <Button
          block
          className="da-mt-16"
          type="primary"
          icon={<RiMailAddLine className="remix-icon" />}
          onClick={handlePopupOk}
        >
          Subscribe
        </Button>
      </div>
    </Modal>

    <Modal
      width={1000}
      visible={PopupWidthModalVisible}
      onCancel={handlePopupWidthCancel}
      footer={false}
      closable={false}
      className="popup-modal"
    >
      <Col className="da-text-center">
        <img src={popUpImage} alt="Pop-up" />
        <Row justify="center">
          <Col md={14}>
            <h3 className="da-text-color-dark-bg">Pop-up Title</h3>
            <p className="da-p2-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc, urna arcu mattis sagittis ut velit ornare scelerisque.
              Justo eget eleifend sed urna, risus. Augue ornare sit non
              auctor consectetur. Amet.
            </p>
          </Col>
        </Row>

        <Row className="da-mt-16">
          <Col span={12}>
            <Button
              block
              type="primary"
              ghost
              onClick={handlePopupWidthCancel}
            >
              Cancel
            </Button>
          </Col>

          <Col span={12} className="da-pl-8">
            <Button
              block
              type="primary"
              icon={<RiMailAddLine className="remix-icon" />}
              onClick={handlePopupWidthOk}
            >
              Subscribe
            </Button>
          </Col>
        </Row>
      </Col>
    </Modal>

    <Modal
      title="Basic Modal"
      width={416}
      visible={FormModalVisible}
      onCancel={handleFormCancel}
      footer={
        <Button block type="primary" ghost onClick={handleFormOk}>
          Signup
        </Button>
      }
      closeIcon={
        <RiCloseFill
          className="remix-icon text-color-black-100"
          size={24}
        />
      }
    >
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            onClick={handleFormOk}
          >
            Button
          </Button>
        </Form.Item>
      </Form>

      <Button block type="text" onClick={handleFormCancel}>
        Cancel
      </Button>
    </Modal>

    <Modal
      title="Basic Modal"
      width={1000}
      visible={FormWidthModalVisible}
      onCancel={handleFormWidthCancel}
      footer={
        <Row gutter={[8, 8]} justify="end">
          <Col>
            <Button type="primary" ghost>
              Delete
              </Button>
          </Col>

          <Col>
            <Button type="test" onClick={handleFormWidthCancel}>
              Cancel
              </Button>
          </Col>

          <Col>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleFormWidthOk}
            >
              Confirm
              </Button>
          </Col>
        </Row>
      }
      closeIcon={
        <RiCloseFill
          className="remix-icon text-color-black-100"
          size={24}
        />
      }
    >
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
      >
        <Row>
          <Col md={12} span={24}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Please input your firstname!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              className="da-pl-sm-0 da-pl-16"
              label="Last Name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Please input your lastname!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col md={12} span={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "At least 6 Character" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              className="da-pl-sm-0 da-pl-16"
              label="Zip Code"
              name="zipcode"
              rules={[{ required: true, message: "1234" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "St. 200 etc." }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  </>
);
`;
