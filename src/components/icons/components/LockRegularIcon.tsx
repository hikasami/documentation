import React from 'react';
import type { IconProps } from '../types';

export const LockRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 6V5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6H10.5ZM4 5V6C2.34315 6 1 7.34315 1 9V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V9C15 7.34315 13.6569 6 12 6V5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5ZM10.5 7.5H12C12.8284 7.5 13.5 8.17157 13.5 9V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V9C2.5 8.17157 3.17157 7.5 4 7.5H5.5H10.5ZM8.75 9.5C8.75 9.08579 8.41421 8.75 8 8.75C7.58579 8.75 7.25 9.08579 7.25 9.5V11.5C7.25 11.9142 7.58579 12.25 8 12.25C8.41421 12.25 8.75 11.9142 8.75 11.5V9.5Z" fill="currentColor"/>
  </svg>
);

LockRegularIcon.displayName = 'LockRegularIcon';
