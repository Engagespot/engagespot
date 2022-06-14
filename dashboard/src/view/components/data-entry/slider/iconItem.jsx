import React, { useState } from 'react';

import { Slider } from 'antd';
import { RiThumbUpLine, RiThumbDownLine } from 'react-icons/ri';

export default function IconItem(props) {
  const [value, setValue] = useState(0);

  const handleChange = value => {
    setValue(value);
  };

  const { max, min } = props;
  const mid = ((max - min) / 2).toFixed(5);
  const nextColorCls = value >= mid ? '' : ' icon-wrapper-active';
  const preColorCls = value >= mid ? ' icon-wrapper-active' : '';

  return (
    <div className="da-slider-icon-wrapper">
      <RiThumbDownLine className={'da-text-color-dark-0' + preColorCls} />
      <Slider {...props} onChange={handleChange} value={value} />
      <RiThumbUpLine className={'da-text-color-dark-0' + nextColorCls} />
    </div>
  );
}
