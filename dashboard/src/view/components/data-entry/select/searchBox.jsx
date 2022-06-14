import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { searchBox } from './code.js';

import { Select, Card, Row, Col, Button } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Option } = Select;

export default function SelectSearchBox() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [data, setData] = useState([]);
  const [value, setValue] = useState(undefined);
  let timeout;
  let currentValue;

  function fetch(value, callback) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    currentValue = value;

    function fake() {
      const str = querystring.encode({
        code: 'utf-8',
        q: value,
      });
      jsonp('https://suggest.taobao.com/sug?' + str)
        .then(response => response.json())
        .then(d => {
          if (currentValue === value) {
            const { result } = d;
            const data = [];
            result.forEach(r => {
              data.push({
                value: r[0],
                text: r[0],
              });
            });
            callback(data);
          }
        });
    }

    timeout = setTimeout(fake, 300);
  }

  const handleSearch = value => {
    if (value) {
      fetch(value, data => setData(data));
    } else {
      setData([]);
    }
  };

  const handleChange = value => {
    setValue({ value });
  };

  const options = data.map(d => <Option key={d.value}>{d.text}</Option>);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Search Box</h4>
          <p className="da-p1-body">Search with remote data.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>
        <Col span={24}>
          <Select
            showSearch
            value={value}
            placeholder="input search text"
            style={{ width: 200 }}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
          >
            {options}
          </Select>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {searchBox}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
