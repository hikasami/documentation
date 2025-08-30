import React from 'react';
import type { IconProps } from '../types';

export const ThumbsupFillIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M7.10066 1.68472C7.348 1.26072 7.80193 1 8.2928 1C9.17147 1 9.82642 1.81017 9.64232 2.66933L8.9286 6H9.50003H12.8688C14.1914 6 15.1498 7.26089 14.7958 8.53528L13.9174 11.6975C13.3895 13.598 11.555 14.83 9.596 14.5995L4.50009 14L4.00003 7L7.10066 1.68472ZM2.74813 7.44656C2.71861 7.0334 2.35976 6.72239 1.9466 6.75191C1.53344 6.78142 1.22243 7.14027 1.25194 7.55344L1.75194 14.5534C1.78145 14.9666 2.14031 15.2776 2.55347 15.2481C2.96663 15.2186 3.27764 14.8597 3.24813 14.4466L2.74813 7.44656Z" fill="currentColor"/>
  </svg>
);

ThumbsupFillIcon.displayName = 'ThumbsupFillIcon';
