import React from 'react';
import type { IconProps } from '../types';

export const StarRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M9.1944 4.9993L9.54532 5.87319L10.4849 5.9369L13.6824 6.15371L11.223 8.20858L10.5003 8.81238L10.7301 9.72564L11.512 12.8337L8.79766 11.1296L8.0001 10.6289L7.20254 11.1296L4.48823 12.8337L5.27013 9.72564L5.49988 8.81238L4.7772 8.20858L2.31777 6.15371L5.51532 5.9369L6.45488 5.87319L6.8058 4.9993L8.0001 2.02525L9.1944 4.9993ZM1.47095 4.70768L5.41385 4.44033L6.88653 0.773024C7.28962 -0.23074 8.71058 -0.230737 9.11367 0.773027L10.5864 4.44033L14.5293 4.70768C15.6085 4.78086 16.0476 6.13228 15.2175 6.82581L12.1847 9.35968L13.1489 13.1922C13.4128 14.2412 12.2632 15.0764 11.3471 14.5013L8.0001 12.4L4.65308 14.5013C3.73698 15.0764 2.5874 14.2412 2.85129 13.1922L3.81545 9.35968L0.782721 6.82581C-0.0473555 6.13228 0.39175 4.78086 1.47095 4.70768Z" fill="currentColor"/>
  </svg>
);

StarRegularIcon.displayName = 'StarRegularIcon';
