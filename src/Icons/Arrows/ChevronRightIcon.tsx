import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m6.865 3.158 3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 0 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .73-.684Z"/></svg>;
    }
);
ChevronRightIcon.displayName = 'ChevronRightIcon';
ChevronRightIcon.propTypes = {iconType: PropTypes.string};
ChevronRightIcon.defaultProps = {iconType: 'Arrows'};