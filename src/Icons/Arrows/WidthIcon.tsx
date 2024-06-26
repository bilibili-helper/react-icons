import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const WidthIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.818 5.318 3.086 7.05h8.828l-1.732-1.732a.45.45 0 0 1 .636-.636l2.5 2.5a.45.45 0 0 1 0 .636l-2.5 2.5a.45.45 0 0 1-.636-.636l1.732-1.732H3.086l1.732 1.732a.45.45 0 0 1-.636.636l-2.5-2.5a.45.45 0 0 1 0-.636l2.5-2.5a.45.45 0 1 1 .636.636Z"/></svg>;
    }
);
WidthIcon.displayName = 'WidthIcon';
WidthIcon.propTypes = {iconType: PropTypes.string};
WidthIcon.defaultProps = {iconType: 'Arrows'};