import { useSelector, useDispatch } from 'react-redux';

import { ConfigProvider, Spin } from 'antd';

import Router from './router/Router';
import { Modal } from 'antd';
import { shallowEqual } from 'react-redux';
import { SetGlobalLoader } from './redux/reducers/additional-fetch/additionalFetchActions';

export default function App() {
  const customise = useSelector(state => state.customise);
  const dispatch = useDispatch();

  const { additionalFetch } = useSelector(
    ({ users, additionalFetch }) => ({
      users: users,
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  return (
    <>
      <ConfigProvider direction={customise.direction}>
        <Router />
      </ConfigProvider>

      {/* Global loader */}
      <Modal
        centered
        visible={additionalFetch.globalLoader}
        onCancel={() => dispatch(SetGlobalLoader(false))}
        footer={null}
        mask={true}
        closeIcon={false}
        bodyStyle={{ height: '0px' }}
        closable={false}
        modalRender={() => {
          return <Spin style={{ marginLeft: '15vw' }} size={'large'}></Spin>;
        }}
      ></Modal>
    </>
  );
}
