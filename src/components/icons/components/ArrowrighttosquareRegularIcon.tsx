import React from 'react';
import type { IconProps } from '../types';

export const ArrowrighttosquareRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M11.7803 7.46967C12.0732 7.76256 12.0732 8.23744 11.7803 8.53033L9.28033 11.0303C8.98744 11.3232 8.51256 11.3232 8.21967 11.0303C7.92678 10.7374 7.92678 10.2626 8.21967 9.96967L9.43934 8.75L1.75 8.75C1.33579 8.75 1 8.41421 1 8C1 7.58579 1.33579 7.25 1.75 7.25L9.43934 7.25L8.21967 6.03033C7.92678 5.73744 7.92678 5.26256 8.21967 4.96967C8.51256 4.67678 8.98744 4.67678 9.28033 4.96967L11.7803 7.46967ZM4 11.75C4 11.3358 4.33579 11 4.75 11C5.16421 11 5.5 11.3358 5.5 11.75L5.5 12C5.5 12.8284 6.17157 13.5 7 13.5L12 13.5C12.8284 13.5 13.5 12.8284 13.5 12L13.5 4C13.5 3.17157 12.8284 2.5 12 2.5L7 2.5C6.17157 2.5 5.5 3.17157 5.5 4L5.5 4.25C5.5 4.66421 5.16421 5 4.75 5C4.33579 5 4 4.66421 4 4.25L4 4C4 2.34315 5.34315 1 7 1L12 1C13.6569 0.999999 15 2.34315 15 4L15 12C15 13.6569 13.6569 15 12 15L7 15C5.34315 15 4 13.6569 4 12L4 11.75Z" fill="currentColor"/>
  </svg>
);

ArrowrighttosquareRegularIcon.displayName = 'ArrowrighttosquareRegularIcon';
