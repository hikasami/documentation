import React from 'react';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  width?: string | number;
  height?: string | number;
  color?: string;
  className?: string;
}

export type IconComponent = React.FC<IconProps>;