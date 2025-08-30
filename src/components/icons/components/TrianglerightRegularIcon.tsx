import React from 'react';
import type { IconProps } from '../types';

export const TrianglerightRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M13.0054 7.13407L4.50037 2.2171C3.8337 1.83168 2.99986 2.31278 2.99986 3.08283L2.99986 12.9168C2.99986 13.6868 3.8337 14.1679 4.50036 13.7825L13.0054 8.86554C13.6714 8.48051 13.6714 7.51909 13.0054 7.13407ZM13.7561 10.1641C15.4211 9.20157 15.4211 6.79804 13.7561 5.83546L5.25112 0.918498C3.58445 -0.0450425 1.49986 1.15769 1.49986 3.08283L1.49986 12.9168C1.49986 14.8419 3.58445 16.0446 5.25112 15.0811L13.7561 10.1641Z" fill="currentColor"/>
  </svg>
);

TrianglerightRegularIcon.displayName = 'TrianglerightRegularIcon';
