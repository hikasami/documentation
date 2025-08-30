import React from 'react';
import type { IconProps } from '../types';

export const ThumbsdownRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M12 9L9.05912 14.0414C8.71284 14.635 8.07732 15 7.39009 15C6.15992 15 5.24296 13.8657 5.50072 12.6629L5.74991 11.5L6.07134 10H4.53728L3.13123 10C1.80859 10 0.850205 8.73911 1.20419 7.46472L2.08256 4.30253C2.61047 2.402 4.44502 1.17001 6.404 1.40048L11.4999 2L12 9ZM6.22874 2.89021L10.0921 3.34473L10.4708 8.64455L7.76346 13.2855C7.68599 13.4183 7.54383 13.5 7.39009 13.5C7.11489 13.5 6.90976 13.2463 6.96742 12.9772L7.53804 10.3143L7.92682 8.5H6.07134L3.13123 8.5C2.80057 8.5 2.56098 8.18478 2.64947 7.86618L3.52784 4.70399C3.85778 3.51615 5.00438 2.74617 6.22874 2.89021ZM13.2519 8.55344C13.2814 8.9666 13.6402 9.27761 14.0534 9.24809C14.4666 9.21858 14.7776 8.85973 14.7481 8.44656L14.2481 1.44656C14.2186 1.0334 13.8597 0.722395 13.4465 0.751905C13.0334 0.781418 12.7224 1.14027 12.7519 1.55344L13.2519 8.55344Z" fill="currentColor"/>
  </svg>
);

ThumbsdownRegularIcon.displayName = 'ThumbsdownRegularIcon';
