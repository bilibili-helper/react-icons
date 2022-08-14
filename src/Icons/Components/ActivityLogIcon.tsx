import * as React from 'react';
import { IconProps } from '../types';

export const ActivityLogIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M.5 1h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1Zm4 0h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Zm0 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm-4 3h2a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1Zm4 0h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Zm0 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm-4 3h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Zm4 0h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
ActivityLogIconIcon.displayName = 'ActivityLogIconIcon';

export default ActivityLogIconIcon;
