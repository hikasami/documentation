import React from 'react';
import type { IconProps } from '../types';

export const ArchiveRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 8H13.5V11C13.5 11.8284 12.8284 12.5 12 12.5H4C3.17157 12.5 2.5 11.8284 2.5 11V8ZM13.1972 6.5L11.3457 3.72265C11.2529 3.58355 11.0968 3.5 10.9296 3.5H5.07037C4.90319 3.5 4.74708 3.58355 4.65434 3.72265L2.80278 6.5H13.1972ZM15 7.40833V8V11C15 12.6569 13.6569 14 12 14H4C2.34315 14 1 12.6569 1 11V8V7.40833C1 6.81605 1.17531 6.23703 1.50385 5.74423L3.40627 2.8906C3.7772 2.3342 4.40166 2 5.07037 2H10.9296C11.5983 2 12.2228 2.3342 12.5937 2.8906L14.4962 5.74423C14.8247 6.23703 15 6.81605 15 7.40833ZM9.25 11C9.66421 11 10 10.6642 10 10.25C10 9.83579 9.66421 9.5 9.25 9.5H6.75C6.33579 9.5 6 9.83579 6 10.25C6 10.6642 6.33579 11 6.75 11H9.25Z" fill="currentColor"/>
  </svg>
);

ArchiveRegularIcon.displayName = 'ArchiveRegularIcon';
