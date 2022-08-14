import * as React from 'react';
import { IconProps } from '../types';

export const DotsHorizontalIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M2.5 8.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm5 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM13.625 7.5a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
DotsHorizontalIconIcon.displayName = 'DotsHorizontalIconIcon';

export default DotsHorizontalIconIcon;
