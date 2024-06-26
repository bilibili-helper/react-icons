import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CornerBottomRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Corners', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.5 12a.5.5 0 0 1 0-1h1.6c1.128 0 1.945 0 2.586-.053.637-.052 1.057-.152 1.403-.328a3.5 3.5 0 0 0 1.53-1.53c.176-.346.276-.766.328-1.403C11 7.045 11 6.228 11 5.1V3.5a.5.5 0 0 1 1 0v1.623c0 1.1 0 1.958-.056 2.645-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434C7.08 12 6.224 12 5.123 12H3.5Z"/></svg>;
    }
);
CornerBottomRightIcon.displayName = 'CornerBottomRightIcon';
CornerBottomRightIcon.propTypes = {iconType: PropTypes.string};
CornerBottomRightIcon.defaultProps = {iconType: 'Corners'};