import React from 'react';

import { Button } from 'antd';
import { RiArrowUpLine } from 'react-icons/ri';
import ScrollToTop from 'react-scroll-up';

export default function ScrollTop() {
  return (
    <div className="scroll-to-top">
      <ScrollToTop showUnder={300} style={{ bottom: '6%' }}>
        <Button
          className="da-primary-shadow"
          type="primary"
          shape="circle"
          icon={<RiArrowUpLine />}
        />
      </ScrollToTop>
    </div>
  );
}
