import React from 'react';

export interface CircleProps {
  style?: React.CSSProperties | undefined;
}

export function Circle({ style = {} }: CircleProps = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{ ...style }}
    >
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}
