import { Avatar, Col, Dropdown, Menu } from 'antd';
import { Logout, User } from 'react-iconly';
import { RiHome6Line } from 'react-icons/ri';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avatarImg from '../../../assets/images/memoji/memoji-1.png';
import { handlePromise } from '../../../helpers/helpers';
import {
  SetAppId,
  SetAppsFetchSuccess,
  SetClientId,
  SetClientUserFetchSuccess,
  SetGlobalLoader,
  SetInvitationsFetchSuccess,
  SetLogsFetchSuccess,
  SetShownInvitationsOnce,
} from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { LogoutSuccess } from '../../../redux/reducers/auth/authActions';
import { ListAllApps } from '../../../services/feed.service';

export default function HeaderUser() {
  const customise = useSelector(state => state.customise);
  const dispatch = useDispatch();
  const { SubMenu } = Menu;
  const { additionalFetch, users } = useSelector(
    ({ users, additionalFetch }) => ({
      users: users,
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const handleWorkSpaceChange = async workspace => {
    const selectedClientId = workspace.key;
    const clientId = additionalFetch.clientId;

    if (selectedClientId === clientId) return;

    // start loader
    dispatch(SetGlobalLoader(true));

    dispatch(SetClientId(selectedClientId));

    let [result, error] = await handlePromise(() =>
      ListAllApps(selectedClientId)
    );
    if (error) return;

    const firstAppId = result[0].id;
    dispatch(SetAppsFetchSuccess(result));
    dispatch(SetAppId(firstAppId));

    //  data is taken only if clientUsers is empty
    dispatch(SetClientUserFetchSuccess([]));

    // invitations is never opened once
    dispatch(SetShownInvitationsOnce(false));

    // reset invitations data
    dispatch(SetInvitationsFetchSuccess([]));

    // reset logs
    dispatch(SetLogsFetchSuccess([]));

    // close loader after 0.8 seconds
    setTimeout(() => {
      dispatch(SetGlobalLoader(false));
    }, 800);
  };

  const logout = () => {
    dispatch(LogoutSuccess({}));
  };

  const menu = (
    <>
      <Menu theme={customise.theme == 'light' ? 'light' : 'dark'}>
        <Menu.Item
          key={0}
          icon={
            <User
              set="curved"
              className="remix-icon da-vertical-align-middle da-text-color-dark-0"
              size={16}
            />
          }
          className="da-text-color-dark-0"
        >
          <Link to="/profile">Profile</Link>
        </Menu.Item>

        <SubMenu
          key="subworkspace"
          icon={
            <RiHome6Line className="remix-icon da-vertical-align-middle da-text-color-dark-0" />
          }
          title="Workspace"
          onClick={handleWorkSpaceChange}
          className="da-text-color-dark-0"
        >
          {additionalFetch.clients.map(item => {
            return (
              <Menu.Item key={item.client.id} value={item.client.id}>
                {item.client.name}
              </Menu.Item>
            );
          })}
        </SubMenu>

        <Menu.Item
          key={5}
          icon={
            <Logout
              set="curved"
              className="remix-icon da-vertical-align-middle da-text-color-dark-0"
              size={16}
            />
          }
          onClick={logout}
          className="da-text-color-dark-0"
        >
          Logout
        </Menu.Item>
      </Menu>
    </>
  );

  return (
    <Col style={{ marginLeft: '10px' }}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Col className="da-d-flex-center" onClick={e => e.preventDefault()}>
          <Avatar
            src={
              users.items.clientUser &&
              (users.items.clientUser.profilePicture
                ? users.items.clientUser.profilePicture
                : avatarImg)
            }
            size={40}
          />
        </Col>
      </Dropdown>
    </Col>
  );
}
