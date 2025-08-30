import React from 'react';
import type { IconProps } from '../types';

export const HeartFillIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M4.76 1.49945C3.4822 1.49945 2.39504 1.959 1.6329 2.79557C0.878044 3.62415 0.5 4.75785 0.5 6.01293C0.5 8.19254 1.60945 9.93037 3.01909 11.2806C4.42375 12.626 6.18921 13.649 7.65248 14.4141C7.86916 14.5274 8.12746 14.5279 8.34464 14.4156C9.80786 13.6586 11.5728 12.6279 12.9784 11.276C14.3872 9.92101 15.5 8.17826 15.5 6.01293C15.5 4.75351 15.1199 3.6195 14.3637 2.79189C13.6006 1.95665 12.5137 1.49945 11.24 1.49945C10.1638 1.49945 9.27388 1.89761 8.59732 2.64999C8.37072 2.90198 8.17283 3.18823 8 3.5036C7.82717 3.18823 7.62928 2.90198 7.40268 2.64999C6.72612 1.89761 5.83617 1.49945 4.76 1.49945Z" fill="currentColor"/>
  </svg>
);

HeartFillIcon.displayName = 'HeartFillIcon';
