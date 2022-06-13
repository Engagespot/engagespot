import { Link } from 'react-router-dom';
import { Col, Breadcrumb } from 'antd';

const BreadCrumbs = props => {
  const {
    breadCrumbParent,
    breadCrumbParent2,
    breadCrumbParent3,
    breadCrumbActive,
  } = props;

  return (
    <Col>
      <Breadcrumb className="da-d-flex da-flex-wrap">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>

        {breadCrumbParent === 'Components' ? (
          <Breadcrumb.Item>
            <Link to="/components/components-page">Components</Link>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item>{breadCrumbParent}</Breadcrumb.Item>
        )}

        {breadCrumbParent2 && (
          <Breadcrumb.Item>{breadCrumbParent2}</Breadcrumb.Item>
        )}

        {breadCrumbParent3 && (
          <Breadcrumb.Item>{breadCrumbParent3}</Breadcrumb.Item>
        )}

        <Breadcrumb.Item>{breadCrumbActive}</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
  );
};

export default BreadCrumbs;
