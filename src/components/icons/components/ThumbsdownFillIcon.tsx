import React from 'react';
import type { IconProps } from '../types';

export const ThumbsdownFillIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M8.89934 14.3153C8.652 14.7393 8.19807 15 7.7072 15C6.82853 15 6.17358 14.1898 6.35768 13.3307L7.0714 10H6.49997L3.13123 10C1.80859 10 0.850205 8.73911 1.20419 7.46472L2.08256 4.30253C2.61047 2.402 4.44502 1.17001 6.404 1.40048L11.4999 2L12 9L8.89934 14.3153ZM13.2519 8.55344C13.2814 8.9666 13.6402 9.27761 14.0534 9.24809C14.4666 9.21858 14.7776 8.85973 14.7481 8.44656L14.2481 1.44656C14.2186 1.0334 13.8597 0.722395 13.4465 0.751905C13.0334 0.781418 12.7224 1.14027 12.7519 1.55344L13.2519 8.55344Z" fill="currentColor"/>
  </svg>
);

ThumbsdownFillIcon.displayName = 'ThumbsdownFillIcon';
