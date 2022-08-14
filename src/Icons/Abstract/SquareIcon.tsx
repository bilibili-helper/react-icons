import * as React from 'react';
import { IconProps } from '../types';

export const SquareIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M14 1v13H1V1h13ZM2 13h11V2H2v11Z" fillRule="evenodd" />
      </svg>
    );
  }
);
SquareIconIcon.displayName = 'SquareIconIcon';

export default SquareIconIcon;
