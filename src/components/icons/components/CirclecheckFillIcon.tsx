import React from 'react';
import type { IconProps } from '../types';

export const CirclecheckFillIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.1 6.45C11.3485 6.11863 11.2814 5.64853 10.95 5.4C10.6186 5.15147 10.1485 5.21863 9.9 5.55L7.41885 8.85819L6.03033 7.46967C5.73744 7.17678 5.26256 7.17678 4.96967 7.46967C4.67678 7.76256 4.67678 8.23744 4.96967 8.53033L6.96967 10.5303C7.12341 10.6841 7.3363 10.7635 7.55317 10.7481C7.77004 10.7327 7.96955 10.6239 8.1 10.45L11.1 6.45Z" fill="currentColor"/>
  </svg>
);

CirclecheckFillIcon.displayName = 'CirclecheckFillIcon';
