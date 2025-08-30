import React from 'react';
import type { IconProps } from '../types';

export const TriangleexclamationFillIcon: React.FC<IconProps> = ({
  width = '1em',
  height = '1em',
  color = 'currentColor',
  className,
  style,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5.83546 2.24374C6.79804 0.578747 9.20157 0.578749 10.1641 2.24374L15.0811 10.7488C16.0446 12.4154 14.8419 14.5 12.9168 14.5L3.08283 14.5C1.15769 14.5 -0.0450423 12.4154 0.918499 10.7488L5.83546 2.24374ZM7.99992 5.00002C8.41414 5.00002 8.74992 5.3358 8.74992 5.75002V7.75002C8.74992 8.16423 8.41414 8.50002 7.99992 8.50002C7.58571 8.50002 7.24992 8.16423 7.24992 7.75002V5.75002C7.24992 5.3358 7.58571 5.00002 7.99992 5.00002ZM8.99992 10.75C8.99992 11.3023 8.55221 11.75 7.99992 11.75C7.44764 11.75 6.99992 11.3023 6.99992 10.75C6.99992 10.1977 7.44764 9.75002 7.99992 9.75002C8.55221 9.75002 8.99992 10.1977 8.99992 10.75Z" fill="currentColor"/>
  </svg>
);

TriangleexclamationFillIcon.displayName = 'TriangleexclamationFillIcon';
