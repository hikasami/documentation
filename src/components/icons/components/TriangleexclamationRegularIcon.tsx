import React from 'react';
import type { IconProps } from '../types';

export const TriangleexclamationRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M7.13407 2.99449L2.2171 11.4995C1.83168 12.1662 2.31278 13 3.08283 13L12.9168 13C13.6868 13 14.1679 12.1662 13.7825 11.4995L8.86554 2.99449C8.48051 2.32849 7.51909 2.3285 7.13407 2.99449ZM10.1641 2.24374C9.20157 0.578749 6.79804 0.578747 5.83546 2.24374L0.918499 10.7488C-0.0450422 12.4154 1.15769 14.5 3.08283 14.5L12.9168 14.5C14.8419 14.5 16.0446 12.4154 15.0811 10.7488L10.1641 2.24374ZM7.99982 5.00003C8.41403 5.00003 8.74982 5.33582 8.74982 5.75003V7.75003C8.74982 8.16424 8.41403 8.50003 7.99982 8.50003C7.5856 8.50003 7.24982 8.16424 7.24982 7.75003V5.75003C7.24982 5.33582 7.5856 5.00003 7.99982 5.00003ZM8.99982 10.75C8.99982 11.3023 8.5521 11.75 7.99982 11.75C7.44753 11.75 6.99982 11.3023 6.99982 10.75C6.99982 10.1977 7.44753 9.75003 7.99982 9.75003C8.5521 9.75003 8.99982 10.1977 8.99982 10.75Z" fill="currentColor"/>
  </svg>
);

TriangleexclamationRegularIcon.displayName = 'TriangleexclamationRegularIcon';
