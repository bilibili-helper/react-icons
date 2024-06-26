import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CornerTopRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Corners', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.5 3a.5.5 0 0 0 0 1h1.6c1.128 0 1.945 0 2.586.053.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403C11 7.955 11 8.772 11 9.9v1.6a.5.5 0 0 0 1 0V9.877c0-1.1 0-1.958-.056-2.645-.057-.698-.175-1.265-.434-1.775A4.5 4.5 0 0 0 9.543 3.49c-.51-.26-1.077-.377-1.775-.434C7.08 3 6.224 3 5.123 3H3.5Z"/></svg>;
    }
);
CornerTopRightIcon.displayName = 'CornerTopRightIcon';
CornerTopRightIcon.propTypes = {iconType: PropTypes.string};
CornerTopRightIcon.defaultProps = {iconType: 'Corners'};