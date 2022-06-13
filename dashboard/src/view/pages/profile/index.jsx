import {
  Button,
  Col,
  Drawer,
  Dropdown,
  Form,
  Menu,
  Modal,
  Row,
  Spin,
} from 'antd';
import React, { useState } from 'react';
import { RiCloseFill, RiMenuFill, RiMore2Line } from 'react-icons/ri';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../../layout/components/content/breadcrumbs';
import { UsersChangePage } from '../../../redux/reducers/users/usersActions';
import { AddImagesToServerAndGetUrl } from '../../../services/common-api.service';
import { ProfileUpdate } from '../../../services/profile.service';
import ImageUpload from '../../components/custom/imageUploader';
import DeleteAccount from './delete-account';
import MenuProfile from './menu';
import PasswordProfile from './password-change';
import InfoProfile from './personel-information';

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const [preferanceModalVisible, setPreferanceModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedPage, setSelectedPage] = useState(0);

  const { users } = useSelector(
    ({ users }) => ({
      users: users,
    }),
    shallowEqual
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const preferanceModalShow = () => {
    setPreferanceModalVisible(true);
  };

  const preferanceModalCancel = () => {
    setImage(null);
    setImageUrl(null);
    setLoadingImage(false);
    setPreferanceModalVisible(false);
  };

  const rateMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={() => preferanceModalShow()} key="0">
          Change Avatar
        </Menu.Item>
      </Menu>
    );
  };

  function moreBtn() {
    return (
      <Dropdown overlay={rateMenu} placement="bottomLeft">
        <Button
          type="text"
          icon={
            <RiMore2Line
              className="da-text-color-black-100 da-text-color-dark-0"
              size={24}
            />
          }
        ></Button>
      </Dropdown>
    );
  }

  const handleSubmit = async () => {
    if (image === null) return;

    let imageUrl;
    setLoading(true);

    const imageFormData = new FormData();
    imageFormData.append('image', image);

    try {
      const response = await AddImagesToServerAndGetUrl(imageFormData);
      imageUrl = response.url;
    } catch (e) {
      //console.log(e);
      setLoading(false);
      return;
    }

    const profilePicChangeData = {
      profilePicture: imageUrl,
    };

    const clientId = users.items.clientUser.id;

    try {
      await ProfileUpdate(clientId, profilePicChangeData);
    } catch (e) {
      console.warn(e);
    } finally {
      setImage(null);
      setImageUrl(null);
      setLoadingImage(false);
      setLoading(false);
      preferanceModalCancel();
      dispatch(UsersChangePage());
    }
  };

  return (
    <>
      <Modal
        title="Change Avatar"
        width={316}
        centered
        visible={preferanceModalVisible}
        onCancel={preferanceModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic" initialValues={{ remember: true }}>
          <Form.Item label="" name="language">
            <ImageUpload
              loadingImage={loadingImage}
              setLoadingImage={setLoadingImage}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              setImage={setImage}
            />
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="da-pr-sm-0 da-pr-12">
              <Button
                disabled={loading}
                block
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
              >
                {loading ? <Spin /> : 'Change'}
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

      <Row gutter={[32, 32]} className="da-mb-32">
        <Drawer
          title={moreBtn()}
          className="da-profile-mobile-menu"
          placement="left"
          closable={true}
          onClose={onClose}
          visible={visible}
          width={250}
          closeIcon={
            <RiCloseFill
              className="remix-icon da-text-color-black-80"
              size={24}
            />
          }
        >
          <MenuProfile
            onCloseDrawer={onClose}
            moreBtnCheck="none"
            footer="none"
          />
        </Drawer>

        <Col span={24}>
          <Row gutter={[32, 32]} justify="space-between">
            <Breadcrumbs breadCrumbParent="Profile" breadCrumbActive="" />
          </Row>
        </Col>

        <Col span={24}>
          <Row className="da-profile-mobile-menu-btn da-bg-color-black-0 da-bg-color-dark-100 da-border-radius da-py-12 da-px-sm-8 da-px-24 da-mb-16">
            <Button
              className="da-p-0"
              type="text"
              icon={
                <RiMenuFill
                  size={24}
                  className="remix-icon da-text-color-black-80 da-text-color-dark-30"
                />
              }
              onClick={showDrawer}
            ></Button>
          </Row>

          <Row className="da-bg-color-black-0 da-bg-color-dark-100 da-border-radius da-pr-sm-16 da-pr-32">
            <MenuProfile
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              moreBtn={moreBtn}
              preferanceModalShow={preferanceModalShow}
            />

            <Col
              flex="1 1"
              className="da-pl-sm-16 da-pl-32 da-py-sm-24 da-py-32 da-pb-24 da-overflow-hidden"
            >
              {selectedPage === 0 ? (
                <InfoProfile />
              ) : selectedPage === 1 ? (
                <PasswordProfile />
              ) : (
                <DeleteAccount />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
