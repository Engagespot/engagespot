import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt8M = file.size / 1024 / 1024 < 8;
  if (!isLt8M) {
    message.error('Image must smaller than 8MB!');
  }
  return isJpgOrPng && isLt8M;
}

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};

function ImageUpload({
  setImage,
  loadingImage,
  setLoadingImage,
  imageUrl,
  setImageUrl,
}) {
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setImage(null);
      setLoadingImage(true);
      return;
    }
    if (info.file.status === 'done') {
      setImage(info.file.originFileObj);

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl);
        setLoadingImage(false);
      });
    } else if (info.file.status === 'error') {
      message.error({
        content: info.file.name + ' file upload failed.',
        icon: <RiCloseCircleLine className="remix-icon" />,
      });
    }
  };

  const uploadButton = (
    <div>
      {loadingImage ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader csm-upload-parent"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={dummyRequest}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}

export default ImageUpload;
