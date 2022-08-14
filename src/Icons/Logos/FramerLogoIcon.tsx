import * as React from 'react';
import { IconProps } from '../types';

export const FramerLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M3.84.997h7.66a.5.5 0 0 1 .5.5V5.5a.5.5 0 0 1-.5.5H8.635l2.894 3.162a.5.5 0 0 1-.369.838H8v3.5a.5.5 0 0 1-.854.354l-4-4A.5.5 0 0 1 3 9.5v-4a.5.5 0 0 1 .5-.5h2.865L3.471 1.835A.5.5 0 0 1 3.84.997Zm1.135 1H11V5H7.72L4.975 1.997ZM4 6v3h6.025L7.28 6H4Zm3 6.293V10H4.707L7 12.293Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
FramerLogoIconIcon.displayName = 'FramerLogoIconIcon';

export default FramerLogoIconIcon;
