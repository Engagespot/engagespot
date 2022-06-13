import { Button, Spin } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';

export const SubmintButton = ({ children, ...rest }) => {
  const { apiLoader } = useSelector(
    ({ apiLoader }) => ({
      apiLoader,
    }),
    shallowEqual
  );
  return (
    <>
      {apiLoader && (
        <Button {...rest} disabled={apiLoader}>
          <Spin />
        </Button>
      )}
      {!apiLoader && (
        <Button {...rest} disabled={apiLoader}>
          {children}
        </Button>
      )}
    </>
  );
};
