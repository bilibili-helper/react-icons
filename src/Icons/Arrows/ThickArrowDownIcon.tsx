import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ThickArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.5 3h4a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 .407.79l-5 7a.5.5 0 0 1-.814 0l-5-7A.5.5 0 0 1 2.5 6H5V3.5a.5.5 0 0 1 .5-.5ZM6 6.5a.5.5 0 0 1-.5.5H3.472L7.5 12.64 11.528 7H9.5a.5.5 0 0 1-.5-.5V4H6v2.5Z" fillRule="evenodd"/></svg>;
    }
);
ThickArrowDownIcon.displayName = 'ThickArrowDownIcon';
ThickArrowDownIcon.propTypes = {iconType: PropTypes.string};
ThickArrowDownIcon.defaultProps = {iconType: 'Arrows'};