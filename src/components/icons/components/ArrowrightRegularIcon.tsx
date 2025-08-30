import React from 'react';
import type { IconProps } from '../types';

export const ArrowrightRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M5.46967 13.0303C5.17678 12.7374 5.17678 12.2626 5.46967 11.9697L9.43934 8L5.46967 4.03033C5.17678 3.73744 5.17678 3.26256 5.46967 2.96967C5.76256 2.67678 6.23744 2.67678 6.53033 2.96967L11.0303 7.46967C11.3232 7.76256 11.3232 8.23744 11.0303 8.53033L6.53033 13.0303C6.23744 13.3232 5.76256 13.3232 5.46967 13.0303Z" fill="currentColor"/>
  </svg>
);

ArrowrightRegularIcon.displayName = 'ArrowrightRegularIcon';
