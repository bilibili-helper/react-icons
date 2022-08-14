import * as React from 'react';
import { IconProps } from '../types';

export const HamburgerMenuIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1 3.5a.5.5 0 0 0 .5.5h12a.5.5 0 1 0 0-1h-12a.5.5 0 0 0-.5.5ZM1.5 7h12a.5.5 0 1 1 0 1h-12a.5.5 0 1 1 0-1Zm0 4h12a.5.5 0 1 1 0 1h-12a.5.5 0 0 1 0-1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
HamburgerMenuIconIcon.displayName = 'HamburgerMenuIconIcon';

export default HamburgerMenuIconIcon;
