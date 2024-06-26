import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DotIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M10.125 7.5a2.625 2.625 0 1 0-5.25 0 2.625 2.625 0 0 0 5.25 0Zm-1 0a1.625 1.625 0 1 0-3.25 0 1.625 1.625 0 0 0 3.25 0Z" fillRule="evenodd"/></svg>;
    }
);
DotIcon.displayName = 'DotIcon';
DotIcon.propTypes = {iconType: PropTypes.string};
DotIcon.defaultProps = {iconType: 'Abstract'};