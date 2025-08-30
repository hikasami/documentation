import React from 'react';
import type { IconProps } from '../types';

export const ChevrondownRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.46967C3.26256 5.17678 3.73744 5.17678 4.03033 5.46967L8 9.43934L11.9697 5.46967C12.2626 5.17678 12.7374 5.17678 13.0303 5.46967C13.3232 5.76256 13.3232 6.23744 13.0303 6.53033L8.53033 11.0303C8.23744 11.3232 7.76256 11.3232 7.46967 11.0303L2.96967 6.53033C2.67678 6.23744 2.67678 5.76256 2.96967 5.46967Z" fill="currentColor"/>
  </svg>
);

ChevrondownRegularIcon.displayName = 'ChevrondownRegularIcon';
