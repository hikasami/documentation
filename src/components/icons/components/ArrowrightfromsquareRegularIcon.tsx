import React from 'react';
import type { IconProps } from '../types';

export const ArrowrightfromsquareRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7803 7.46967C15.0732 7.76256 15.0732 8.23744 14.7803 8.53033L12.2803 11.0303C11.9874 11.3232 11.5126 11.3232 11.2197 11.0303C10.9268 10.7374 10.9268 10.2626 11.2197 9.96967L12.4393 8.75L4.75 8.75C4.33579 8.75 4 8.41421 4 8C4 7.58579 4.33579 7.25 4.75 7.25L12.4393 7.25L11.2197 6.03033C10.9268 5.73744 10.9268 5.26256 11.2197 4.96967C11.5126 4.67678 11.9874 4.67678 12.2803 4.96967L14.7803 7.46967ZM9.5 4.25C9.5 4.66421 9.16421 5 8.75 5C8.33579 5 8 4.66421 8 4.25L8 4C8 3.17157 7.32843 2.5 6.5 2.5L4 2.5C3.17157 2.5 2.5 3.17157 2.5 4L2.5 12C2.5 12.8284 3.17157 13.5 4 13.5L6.5 13.5C7.32843 13.5 8 12.8284 8 12L8 11.75C8 11.3358 8.33579 11 8.75 11C9.16421 11 9.5 11.3358 9.5 11.75L9.5 12C9.5 13.6569 8.15685 15 6.5 15L4 15C2.34315 15 0.999999 13.6569 1 12L1 4C1 2.34315 2.34315 0.999999 4 1L6.5 1C8.15685 1 9.5 2.34315 9.5 4L9.5 4.25Z" fill="currentColor"/>
  </svg>
);

ArrowrightfromsquareRegularIcon.displayName = 'ArrowrightfromsquareRegularIcon';
