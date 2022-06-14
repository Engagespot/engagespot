import { Row, Col, Drawer, Button } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import { SubmintButton } from './submitButtten';

export const CrudDrawer = ({
  children,
  open,
  title,
  description,
  onClose,
  saveBtn,
  showSaveButton = true,
  ...rest
}) => {
  const saveClick = () => {
    if (saveBtn && saveBtn.current) {
      saveBtn.current.click();
    }
  };
  return (
    <Drawer
      className="CrudDrawer"
      closable={false}
      width={720}
      placement="right"
      onClose={onClose}
      visible={open}
    >
      <div className="CrudDrawer-header">
        <div className="da-theme-customise-container da-bg-black-0 da-bg-dark-90">
          <div className="da-theme-customise-container-header da-bg-black-10 da-bg-dark-85 da-py-16 da-px-24">
            <Row justify="space-between">
              <Col>
                {title && (
                  <span className="h5 da-d-block da-text-color-black-80 da-text-color-dark-0">
                    {title}
                  </span>
                )}
                {description && (
                  <span className="da-caption da-font-weight-500 da-d-block da-text-color-black-60">
                    {description}
                  </span>
                )}
              </Col>

              <Col>
                <Button type="text" onClick={onClose}>
                  <RiCloseFill
                    size={16}
                    className="da-text-color-black-80 da-text-color-dark-0"
                  />
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className="CrudDrawer-body da-theme-customise-container-body da-py-24 da-px-24"
      >
        {children}
      </div>

      <div className="CrudDrawer-footer da-bg-black-0 da-bg-dark-90">
        <div className="da-theme-customise-container-header da-bg-black-10 da-bg-dark-85 da-py-16 da-px-24">
          <Row justify="end">
            <Col>
              <Button
                type={showSaveButton ? 'text' : 'primary'}
                onClick={onClose}
              >
                {showSaveButton ? 'Cancel' : 'Close'}
              </Button>

              {showSaveButton && (
                <SubmintButton type="primary" onClick={saveClick}>
                  Save
                </SubmintButton>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </Drawer>
  );
};
