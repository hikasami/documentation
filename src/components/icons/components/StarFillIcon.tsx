import React from 'react';
import type { IconProps } from '../types';

export const StarFillIcon: React.FC<IconProps> = ({
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
    <path d="M6.88653 0.773024C7.28962 -0.23074 8.71058 -0.230737 9.11367 0.773027L10.5864 4.44033L14.5293 4.70768C15.6085 4.78086 16.0476 6.13228 15.2175 6.82581L12.1847 9.35968L13.1489 13.1922C13.4128 14.2412 12.2632 15.0764 11.3471 14.5013L8.0001 12.4L4.65308 14.5013C3.73698 15.0764 2.5874 14.2412 2.85129 13.1922L3.81545 9.35968L0.782721 6.82581C-0.0473555 6.13228 0.39175 4.78086 1.47095 4.70768L5.41385 4.44033L6.88653 0.773024Z" fill="currentColor"/>
  </svg>
);

StarFillIcon.displayName = 'StarFillIcon';
