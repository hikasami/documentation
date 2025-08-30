import React from 'react';
import type { IconProps } from '../types';

export const ChevronupRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M13.0303 10.5303C12.7374 10.8232 12.2626 10.8232 11.9697 10.5303L8 6.56066L4.03033 10.5303C3.73744 10.8232 3.26256 10.8232 2.96967 10.5303C2.67678 10.2374 2.67678 9.76256 2.96967 9.46967L7.46967 4.96967C7.76256 4.67678 8.23744 4.67678 8.53033 4.96967L13.0303 9.46967C13.3232 9.76256 13.3232 10.2374 13.0303 10.5303Z" fill="currentColor"/>
  </svg>
);

ChevronupRegularIcon.displayName = 'ChevronupRegularIcon';
