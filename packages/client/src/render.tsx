import ReactDOM from 'react-dom';
import React from 'react';
import { Engagespot, EngagespotProps } from '@engagespot/react-component';

export function render(el: string | HTMLElement, props: EngagespotProps) {
  console.log('Inside render');
  ReactDOM.render(
    <Engagespot {...props} />,
    typeof el === 'string' ? document.querySelector(el) : el
  );
}
