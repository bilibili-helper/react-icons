import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const AlignRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M14 1.5V6H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11v4.5a.5.5 0 0 0 1 0v-12a.5.5 0 1 0-1 0Z"/></svg>;
    }
);
AlignRightIcon.displayName = 'AlignRightIcon';
AlignRightIcon.propTypes = {iconType: PropTypes.string};
AlignRightIcon.defaultProps = {iconType: 'Alignment'};