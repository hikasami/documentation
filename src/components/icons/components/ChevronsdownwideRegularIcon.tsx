import React from 'react';
import type { IconProps } from '../types';

export const ChevronsdownwideRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M2.90251 3.61735C2.55305 3.39497 2.08949 3.49798 1.86711 3.84744C1.64473 4.19689 1.74774 4.66046 2.0972 4.88284L7.5972 8.38284C7.84287 8.53918 8.15683 8.53918 8.40251 8.38284L13.9025 4.88284C14.252 4.66046 14.355 4.19689 14.1326 3.84744C13.9102 3.49798 13.4467 3.39497 13.0972 3.61735L7.99985 6.86111L2.90251 3.61735ZM2.90251 8.11735C2.55305 7.89496 2.08949 7.99798 1.8671 8.34744C1.64472 8.69689 1.74774 9.16046 2.09719 9.38284L7.59719 12.8828C7.84287 13.0392 8.15683 13.0392 8.40251 12.8828L13.9025 9.38284C14.252 9.16046 14.355 8.69689 14.1326 8.34744C13.9102 7.99798 13.4466 7.89496 13.0972 8.11735L7.99985 11.3611L2.90251 8.11735Z" fill="currentColor"/>
  </svg>
);

ChevronsdownwideRegularIcon.displayName = 'ChevronsdownwideRegularIcon';
