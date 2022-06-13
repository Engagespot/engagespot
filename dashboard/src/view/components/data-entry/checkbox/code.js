export const basic = `
import { Checkbox } from "antd";

function onChange(e) {
  //console.log("checked", e.target.checked);
}

return (
  <Checkbox onChange={onChange}>Checkbox</Checkbox>
);
`;

export const controlled = `
import React, { useState } from "react";

import { Button, Checkbox } from "antd";

const [checked, setChecked] = useState(true);
const [disabled, setDisabled] = useState(false);

const toggleChecked = () => {
  setChecked(!checked);
};

const toggleDisable = () => {
  setDisabled(!disabled);
};

const onChange = e => {
  setChecked(e.target.checked);
};

const label = checked ? "Checked" : "Unchecked" + "-" + disabled ? "Disabled" : "Enabled";

return (
  <>
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    >
      {label}
    </Checkbox>

    <Button type="primary" size="small" onClick={toggleChecked}>
      {checked ? "Check" : "Uncheck"}
    </Button>

    <Button
      style={{ margin: "0 10px" }}
      type="primary"
      size="small"
      onClick={toggleDisable}
    >
      {disabled ? 'Disable' : 'Enable'}
    </Button>
  </>
);
`;

export const grid = `
import { Row, Col, Checkbox } from "antd";

function onChange(checkedValues) {
  //console.log("checked = ", checkedValues);
}

return (
  <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
);
`;

export const group = `
import { Checkbox } from "antd";

function onChange(checkedValues) {
  //console.log("checked = ", checkedValues);
}

const plainOptions = ["Apple", "Pear", "Orange"];

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false },
];

return (
  <>
    <Checkbox.Group
      options={plainOptions}
      defaultValue={["Apple"]}
      onChange={onChange}
    />

    <Checkbox.Group
      options={options}
      defaultValue={["Pear"]}
      onChange={onChange}
    />

    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={["Apple"]}
      onChange={onChange}
    />
  </>
);
`;

export const disabled = `
import { Checkbox } from "antd";

function onChange(e) {
  //console.log("checked = $ {e.target.checked}");
}

return (
  <>
    <Checkbox defaultChecked={false} disabled />
    <Checkbox defaultChecked disabled />
  </>
);
`;

export const checkall = `
import React, { useState } from "react";

import { Checkbox, Divider } from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const [checkedList, setCheckedList] = useState(defaultCheckedList);
const [indeterminate, setIndeterminate] = useState(true);
const [checkAll, setCheckAll] = useState(false);

const onChange = (list) => {
  setCheckedList(list);
  setIndeterminate(!!list.length && list.length < plainOptions.length);
  setCheckAll(list.length === plainOptions.length);
};

const onCheckAllChange = (e) => {
  setCheckedList(e.target.checked ? plainOptions : []);
  setIndeterminate(false);
  setCheckAll(e.target.checked);
};

return (
  <>
    <Checkbox
      indeterminate={indeterminate}
      onChange={onCheckAllChange}
      checked={checkAll}
    >
      Check all
    </Checkbox>

    <Divider />

    <CheckboxGroup
      options={plainOptions}
      value={checkedList}
      onChange={onChange}
    />
  </>
);
`;
