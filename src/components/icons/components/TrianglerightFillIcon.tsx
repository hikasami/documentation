import React from 'react';
import type { IconProps } from '../types';

export const TrianglerightFillIcon: React.FC<IconProps> = ({
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
    <path d="M13.7561 10.1643C15.4211 9.20169 15.4211 6.79816 13.7561 5.83559L5.25112 0.918621C3.58445 -0.0449207 1.49986 1.15781 1.49986 3.08296L1.49986 12.9169C1.49986 14.842 3.58445 16.0448 5.25112 15.0812L13.7561 10.1643Z" fill="currentColor"/>
  </svg>
);

TrianglerightFillIcon.displayName = 'TrianglerightFillIcon';
