import React from 'react';
import type { IconProps } from '../types';

export const VkRegularIcon: React.FC<IconProps> = ({
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
    <path d="M1 3C1.1218 8.84635 4.04496 12.3598 9.16989 12.3598H9.46038V9.01499C11.3436 9.20238 12.7676 10.5796 13.3391 12.3598H16C15.2692 9.69894 13.3484 8.22799 12.1492 7.66584C13.3484 6.97252 15.0349 5.28607 15.4378 3H13.0205C12.4958 4.85509 10.9407 6.54154 9.46038 6.70081V3H7.04305V9.48345C5.54398 9.10869 3.65146 7.29107 3.56714 3H1Z" fill="currentColor"/>
  </svg>
);

VkRegularIcon.displayName = 'VkRegularIcon';
