import { Col, Row, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '../../../layout/components/content/breadcrumbs';
import { UserTypeFetchSuccess } from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { ProductChangePage } from '../../../redux/reducers/users/usersActions';
import { ParseError } from '../../../services/parse-api-error.service';
import { Toaster } from '../../../services/toaster.service';
import { CrudDrawer } from '../../components/custom/curd.drawer';
import { DeleteUser, ListUsers, ListUsersTypes } from './api.users.service';
import { ProductsAdd } from './users.add';
import { ProductList } from './users.list';

const componentState = {
  selectedItem: null,
  drawerStatus: false,
  user_type: null,
};
export default function Users() {
  const dispatch = useDispatch();
  const saveBtn = useRef(null);
  const history = useHistory();
  const [state, setState] = useState({ ...componentState });
  const { users, additionalFetch } = useSelector(
    ({ users, additionalFetch }) => ({
      users: users,
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const onClose = () => {
    const _state = {
      ...state,
      drawerStatus: false,
      selectedItem: null,
    };
    setState({ ..._state });
  };

  const onSelectItem = (type, item, extra) => {
    if (type === 'edit') {
      const _state = {
        ...state,
        drawerStatus: true,
        selectedItem: item,
      };
      setState({ ..._state });
    } else if (type === 'delete') {
      //console.log('delete item');
      deleteItem(item.id);
    }
  };

  const deleteItem = async id => {
    try {
      let result = await DeleteUser(id);
      //console.log(result);
      let toaster = new Toaster('success');
      toaster.title = 'Success';
      toaster.message = 'User successfully deleted';
      toaster.open();
      dispatch(ProductChangePage(state.user_type));
    } catch (e) {
      let err = new ParseError(e);
      err.show();
    }
  };

  const openAddItem = () => {
    const _state = {
      ...state,
      drawerStatus: true,
      selectedItem: null,
    };
    setState({ ..._state });
  };
  const addNewItem = item => {
    onClose();
    dispatch(ProductChangePage(state.user_type));
  };

  const handleSelect = value => {
    const _state = {
      ...state,
      user_type: value,
    };
    setState({ ..._state });

    dispatch(ProductChangePage(value));
  };

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Row gutter={[32, 32]} justify="space-between">
            <Breadcrumbs breadCrumbParent="Pages" breadCrumbActive="Users" />
          </Row>
        </Col>

        <Col span={6}>
          <Select
            style={{ width: '100%' }}
            defaultValue="All"
            id="user-type-select"
            onSelect={value => handleSelect(value)}
          >
            {additionalFetch.user_types &&
              additionalFetch.user_types.length > 0 &&
              additionalFetch.user_types.map((type, index) => (
                <Select.Option value={type.id} key={'user-type' + index}>
                  {type.name}
                </Select.Option>
              ))}
          </Select>
        </Col>
        <CrudDrawer
          open={state.drawerStatus}
          saveBtn={saveBtn}
          onClose={onClose}
          title="Add University"
          description=""
        >
          <ProductsAdd
            addNewItem={addNewItem}
            selectedItem={state.selectedItem}
            saveBtn={saveBtn}
            onClose={onClose}
          ></ProductsAdd>
        </CrudDrawer>
        <ProductList
          loading={users.loading}
          selectItem={onSelectItem}
          users={users.items.data ? users.items.data : []}
        ></ProductList>
      </Row>
    </>
  );
}
