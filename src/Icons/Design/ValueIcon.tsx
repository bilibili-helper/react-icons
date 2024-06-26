import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ValueIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5a5.673 5.673 0 1 0 11.346 0 5.673 5.673 0 0 0-11.346 0Z" fillRule="evenodd"/></svg>;
    }
);
ValueIcon.displayName = 'ValueIcon';
ValueIcon.propTypes = {iconType: PropTypes.string};
ValueIcon.defaultProps = {iconType: 'Design'};