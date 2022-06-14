import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { searchSelectUsers } from './code.js';

import { Select, Spin, Card, Row, Col, Button } from 'antd';
import debounce from 'lodash/debounce';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Option } = Select;

export default function SearchSelectUsers() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [value, setValue] = useState([]);

  function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
    const [fetching, setFetching] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const fetchRef = React.useRef(0);
    const debounceFetcher = React.useMemo(() => {
      const loadOptions = value => {
        fetchRef.current += 1;
        const fetchId = fetchRef.current;
        setOptions([]);
        setFetching(true);
        fetchOptions(value).then(newOptions => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }

          setOptions(newOptions);
          setFetching(false);
        });
      };

      return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);
    return (
      <Select
        labelInValue
        filterOption={false}
        onSearch={debounceFetcher}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        {...props}
        options={options}
      />
    );
  } // Usage of DebounceSelect

  async function fetchUserList(username) {
    //console.log('fetching user', username);
    return fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body =>
        body.results.map(user => ({
          label: user.name.first + ' ' + user.name.last,
          value: user.login.username,
        }))
      );
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Search and Select Users</h4>
          <p className="da-p1-body">
            A complete multiple select sample with remote search, debounce
            fetch, ajax callback order flow, and loading state.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <DebounceSelect
            mode="multiple"
            value={value}
            placeholder="Select users"
            fetchOptions={fetchUserList}
            onChange={newValue => {
              setValue(newValue);
            }}
            style={{
              width: '100%',
            }}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {searchSelectUsers}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
