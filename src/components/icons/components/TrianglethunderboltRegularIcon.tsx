import React from 'react';
import type { IconProps } from '../types';

export const TrianglethunderboltRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M7.13407 2.99449L2.2171 11.4995C1.83168 12.1662 2.31278 13 3.08283 13L12.9168 13C13.6868 13 14.1679 12.1662 13.7825 11.4995L8.86554 2.99449C8.48051 2.32849 7.51909 2.3285 7.13407 2.99449ZM10.1641 2.24374C9.20157 0.578749 6.79804 0.578747 5.83546 2.24374L0.918499 10.7488C-0.0450422 12.4154 1.15769 14.5 3.08283 14.5L12.9168 14.5C14.8419 14.5 16.0446 12.4154 15.0811 10.7488L10.1641 2.24374ZM8.67058 6.58541C8.85582 6.21493 8.70565 5.76442 8.33517 5.57918C7.96468 5.39394 7.51418 5.54411 7.32894 5.91459L6.07894 8.41459C5.96269 8.64709 5.97511 8.92319 6.11177 9.1443C6.24842 9.36541 6.48982 9.5 6.74976 9.5H8.03623L7.32894 10.9146C7.14369 11.2851 7.29386 11.7356 7.66435 11.9208C8.03483 12.1061 8.48533 11.9559 8.67058 11.5854L9.92058 9.08541C10.0368 8.85292 10.0244 8.57682 9.88774 8.35571C9.75109 8.13459 9.50969 8 9.24976 8H7.96328L8.67058 6.58541Z" fill="currentColor"/>
  </svg>
);

TrianglethunderboltRegularIcon.displayName = 'TrianglethunderboltRegularIcon';
