export const basic = `
import { DatePicker } from "antd";
import { RiCalendarLine } from "react-icons/ri";

function onChange(value) {
  //console.log("changed", value);
}
  
return (
  <>
    <DatePicker
      onChange={onChange}
      suffixIcon= {<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <DatePicker
      onChange={onChange}
      picker="week"
      suffixIcon= {<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <DatePicker
      onChange={onChange}
      picker="month"
      suffixIcon= {<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <DatePicker
      onChange={onChange}
      picker="quarter"
      suffixIcon= {<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <DatePicker
      onChange={onChange}
      picker="year"
      suffixIcon= {<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />
  </>
);
`;

export const datarender = `
import { DatePicker, Radio, Space, Button } from "antd";

const { RangePicker } = DatePicker;

return (
  <>
    <DatePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = "1px solid #1890ff";
          style.borderRadius = "50%";
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />

    <RangePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = "1px solid #1890ff";
          style.borderRadius = "50%";
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </>
);
`;

export const dateformat = `
import { DatePicker, TimePicker, Select } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const customFormat = (value) => "custom format: " + value.format(dateFormat);

return (
  <>
    <DatePicker
      defaultValue={moment("2015/01/01", dateFormat)}
      format={dateFormat}
    />

    <DatePicker
      defaultValue={moment("01/01/2015", dateFormatList[0])}
      format={dateFormatList}
    />

    <DatePicker
      defaultValue={moment("2015/01", monthFormat)}
      format={monthFormat}
      picker="month"
    />

    <RangePicker
      defaultValue={[
        moment("2015/01/01", dateFormat),
        moment("2015/01/01", dateFormat),
      ]}
      format={dateFormat}
    />
    
    <DatePicker
      defaultValue={moment("2015/01/01", dateFormat)}
      format={customFormat}
    />
  </>
);
`;

export const sizes = `
import React, { useState } from "react";

import { DatePicker, Radio } from "antd";

const { RangePicker } = DatePicker;

const [size, setSize] = useState("default");

const handleSizeChange = (e) => {
  setSize(e.target.value);
};

return (
  <>
    <Radio.Group value={size} onChange={handleSizeChange} className="da-mb-16">
      <Radio.Button value="large">Large</Radio.Button>
      <Radio.Button value="default">Default</Radio.Button>
      <Radio.Button value="small">Small</Radio.Button>
    </Radio.Group>

    <DatePicker className="da-mb-16 da-mr-16" size={size} />

    <DatePicker className="da-mb-16 da-mr-16" size={size} picker="month" />

    <RangePicker className="da-mb-16 da-mr-16" size={size} />

    <DatePicker className="da-mb-16 da-mr-16" size={size} picker="week" />
  </>
);
`;

export const disabled = `
import { DatePicker, Radio } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";

return (
  <>
    <DatePicker
      defaultValue={moment("2015-06-06", dateFormat)}
      disabled
    />

    <DatePicker
      picker="month"
      defaultValue={moment("2015-06", "YYYY-MM")}
      disabled
    />

    <RangePicker
      defaultValue={[
        moment("2015-06-06", dateFormat),
        moment("2015-06-06", dateFormat),
      ]}
      disabled
    />

    <RangePicker
      defaultValue={[
        moment("2019-09-03", dateFormat),
        moment("2019-11-22", dateFormat),
      ]}
      disabled={[false, true]}
    />
  </>
);
`;

export const extrafooter = `
import { DatePicker, Radio } from "antd";

const { RangePicker } = DatePicker;

return (
  <>
    <DatePicker
      renderExtraFooter={() => "extra footer"}
    />

    <DatePicker
      renderExtraFooter={() => "extra footer"}
      showTime
    />

    <RangePicker
      renderExtraFooter={() => "extra footer"}
    />

    <RangePicker
      renderExtraFooter={() => "extra footer"}
      showTime
    />

    <DatePicker
      renderExtraFooter={() => "extra footer"}
      picker="month"
    />
  </>
);
`;

export const rangepicker = `
import { DatePicker } from "antd";
import { RiCalendarLine } from "react-icons/ri";

const { RangePicker } = DatePicker;

function onChange(value) {
  //console.log("changed", value);
}

return (
  <>
    <RangePicker
      onChange={onChange}
      suffixIcon= {<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <RangePicker
      onChange={onChange}
      picker="week"
      suffixIcon={<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <RangePicker
      onChange={onChange}
      picker="month"
      suffixIcon={<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <RangePicker
      onChange={onChange}
      picker="quarter"
      suffixIcon={<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />

    <RangePicker
      onChange={onChange}
      picker="year"
      suffixIcon={<RiCalendarLine className="remix-icon da-text-color-black-100" />}
    />
  </>
);
`;

export const switchable = `
import React, {useState} from "react";

import { DatePicker, TimePicker, Space, Select } from "antd";

const { Option } = Select;

function PickerWithType({ type, onChange }) {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

const [type, setType] = useState("time");

return (
  <Space size={16}>
    <Select value={type} onChange={setType}>
      <Option value="time">Time</Option>
      <Option value="date">Date</Option>
      <Option value="week">Week</Option>
      <Option value="month">Month</Option>
      <Option value="quarter">Quarter</Option>
      <Option value="year">Year</Option>
    </Select>
    
    <PickerWithType
      type={type}
      onChange={(value) => console.log(value)}
    />
    
  </Space>
);
`;
