export const click = `
import React from "react";

import { Upload, message, Button } from "antd";
import {
  RiUpload2Line,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      //console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success({
        content: info.file.name + ' file uploaded successfully.',
        icon: <RiCheckboxCircleLine className="remix-icon" />,
      });
    } else if (info.file.status === "error") {
      message.error({
        content: info.file.name + ' file upload failed.',
        icon: <RiCloseCircleLine className="remix-icon" />,
      });
    }
  },
};

return (
  <Upload {...props}>
    <Button
      type="primary"
      icon={<RiUpload2Line className="remix-icon" />}
    >
      Click to Upload
    </Button>
  </Upload>
);
`;

export const avatar = `
import React, { useState } from "react";

import { Upload, message } from "antd";
import { RiLoaderLine, RiAddLine } from "react-icons/ri";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const [imageUrl, setImageUrl] = useState();
const [loading, setLoading] = useState(false);

const handleChange = (info) => {
  if (info.file.status === "uploading") {
    setLoading(true);
    return;
  }
  
  if (info.file.status === "done") {
    getBase64(
      info.file.originFileObj,
      (imageUrl) => setImageUrl(imageUrl),
      setLoading(false)
    );
  }
};

const uploadButton = (
  <div>
    {loading ? (
      <RiLoaderLine
        className="remix-icon-loading remix-icon-spin remix-icon"
        size={24}
      />
    ) : (
      <RiAddLine size={24} />
    )}
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

return (
  <Upload
    name="avatar"
    listType="picture-card"
    className="avatar-uploader"
    showUploadList={false}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    beforeUpload={beforeUpload}
    onChange={handleChange}
  >
    {imageUrl ? (
      <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
    ) : (
      uploadButton
    )}
  </Upload>
);
`;

export const fileListCode = `
import React, { useState } from "react";

import { Upload, Button } from "antd";
import { RiUpload2Line } from "react-icons/ri";

const [fileList, setFileList] = useState([
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: "http://www.baidu.com/xxx.png",
  },
]);

const handleChange = (info) => {
  let fileList = [...info.fileList];
  fileList = fileList.slice(-2);

  fileList = fileList.map((file) => {
    if (file.response) {
      file.url = file.response.url;
    }
    return file;
  });

  setFileList(fileList);
};

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  multiple: true,
};

return (
  <Upload {...props} onChange={handleChange} fileList={fileList}>
    <Button
      type="primary"
      icon={<RiUpload2Line className="remix-icon" />}
    >
      Upload
    </Button>
  </Upload>
);
`;

export const picturesList = `
import React from "react";

import { Upload, Button } from "antd";
import { RiUpload2Line } from "react-icons/ri";

import images from "../../../../assets/images/memoji/memoji-1.png";

const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: images,
    thumbUrl: images,
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "error",
  },
];

return (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    listType="picture"
    defaultFileList={[...fileList]}
  >
    <Button
      type="primary"
      icon={<RiUpload2Line className="remix-icon" />}
    >
      Upload
    </Button>
  </Upload>
);
`;

export const picturesWall = `
import React, { useState } from "react";

import { Upload, Modal } from "antd";
import { RiAddLine } from "react-icons/ri";

import images from "../../../../assets/images/memoji/memoji-1.png";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const [previewVisible, setPreviewVisible] = useState(false);
const [previewImage, setPreviewImage] = useState();
const [previewTitle, setPreviewTitle] = useState();
const [fileList, setFileList] = useState([
  {
    uid: "-1",
    name: "image.png",
    status: "done",
    url: images,
  },
  {
    uid: "-2",
    name: "image.png",
    status: "done",
    url: images,
  },
  {
    uid: "-3",
    name: "image.png",
    status: "done",
    url: images,
  },
  {
    uid: "-4",
    name: "image.png",
    status: "done",
    url: images,
  },
  {
    uid: "-5",
    name: "image.png",
    status: "error",
  },
]);

const handleCancel = () => setPreviewVisible(false);

const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }

  setPreviewImage(file.url || file.preview);
  setPreviewVisible(true);
  setPreviewTitle(
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
  );
};

const handleChange = (e) => {
  setFileList(e.fileList);
};

const uploadButton = (
  <div>
    <RiAddLine size={24} />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

return (
  <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList}
      onPreview={handlePreview}
      onChange={handleChange}
    >
      {fileList.length >= 8 ? null : uploadButton}
    </Upload>

    <Modal
      visible={previewVisible}
      title={previewTitle}
      footer={null}
      onCancel={handleCancel}
    >
      <img alt="example" style={{ width: "100%" }} src={previewImage} />
    </Modal>
  </>       
);
`;

export const drag = `
import React from "react";

import { Upload, message } from "antd";
import {
  RiUploadCloud2Line,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
    }
    if (status === "done") {
      message.success({
        content: info.file.name + ' file uploaded successfully.',
        icon: <RiCheckboxCircleLine className="remix-icon" />,
      });
    } else if (status === "error") {
      message.error({
        content: info.file.name + ' file upload failed.',
        icon: <RiCloseCircleLine className="remix-icon" />,
      });
    }
  },
  onDrop() {},
};

return (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <RiUploadCloud2Line className="remix-icon" />
    </p>

    <p className="ant-upload-text">
      Click or drag file to this area to upload
    </p>

    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from
      uploading company data or other band files
    </p>
  </Dragger>
);
`;
