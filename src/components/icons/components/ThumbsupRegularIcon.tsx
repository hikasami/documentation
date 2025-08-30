import React from 'react';
import type { IconProps } from '../types';

export const ThumbsupRegularIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M4.00003 7L6.94088 1.95864C7.28716 1.36502 7.92268 1 8.60991 1C9.84008 1 10.757 2.13427 10.4993 3.33712L10.2501 4.5L9.92866 6H11.4627H12.8688C14.1914 6 15.1498 7.26089 14.7958 8.53528L13.9174 11.6975C13.3895 13.598 11.555 14.83 9.596 14.5995L4.50009 14L4.00003 7ZM9.77126 13.1098L5.90785 12.6553L5.52925 7.35545L8.23654 2.71445C8.31401 2.58166 8.45617 2.5 8.60991 2.5C8.88511 2.5 9.09024 2.75374 9.03258 3.02283L8.46196 5.68571L8.07318 7.5H9.92866H12.8688C13.1994 7.5 13.439 7.81522 13.3505 8.13382L12.4722 11.296C12.1422 12.4838 10.9956 13.2538 9.77126 13.1098ZM2.74813 7.44656C2.71861 7.0334 2.35976 6.72239 1.9466 6.75191C1.53344 6.78142 1.22243 7.14027 1.25194 7.55344L1.75194 14.5534C1.78145 14.9666 2.14031 15.2776 2.55347 15.2481C2.96663 15.2186 3.27764 14.8597 3.24813 14.4466L2.74813 7.44656Z" fill="currentColor"/>
  </svg>
);

ThumbsupRegularIcon.displayName = 'ThumbsupRegularIcon';
