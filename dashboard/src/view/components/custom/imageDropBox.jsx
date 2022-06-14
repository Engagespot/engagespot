import { message, Upload } from 'antd';
import React from 'react';
import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiUploadCloud2Line,
} from 'react-icons/ri';

function ImageDropBox({ setImage }) {
  const { Dragger } = Upload;

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

  const props = {
    name: 'image',
    multiple: false,
    maxCount: 1,
    onChange(info) {
      const isOkayToUpload = beforeUpload(info.file.originFileObj);

      if (!isOkayToUpload) {
        setImage({ data: null, loading: false });
        return;
      }

      const { status } = info.file;
      if (status !== 'uploading') {
        setImage({ data: null, loading: true });
      }

      if (status === 'done') {
        setImage({ data: info.file.originFileObj, loading: false });

        message.success({
          content: info.file.name + ' file uploaded successfully.',
          icon: <RiCheckboxCircleLine className="remix-icon" />,
        });
      } else if (status === 'error') {
        message.error({
          content: info.file.name + ' file upload failed.',
          icon: <RiCloseCircleLine className="remix-icon" />,
        });
      }
    },
    onDrop() {
      console.log('Dropped');
    },
  };

  return (
    <Dragger customRequest={dummyRequest} {...props}>
      <p className="ant-upload-drag-icon">
        <RiUploadCloud2Line className="remix-icon" />
      </p>

      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
    </Dragger>
  );
}

export default ImageDropBox;
