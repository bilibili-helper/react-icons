import * as React from 'react';
import { IconProps } from '../types';

export const ComponentInstanceIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="m7.854 1.49 5.656 5.656a.5.5 0 0 1 0 .708L7.854 13.51a.5.5 0 0 1-.707 0L1.49 7.854a.5.5 0 0 1 0-.708L7.147 1.49a.5.5 0 0 1 .707 0ZM2.55 7.5l4.95 4.95 4.95-4.95L7.5 2.55 2.55 7.5Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
ComponentInstanceIconIcon.displayName = 'ComponentInstanceIconIcon';

export default ComponentInstanceIconIcon;
