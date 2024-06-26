import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DottedIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Lines', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.625 7.5a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.875-.875a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Z" fillRule="evenodd"/></svg>;
    }
);
DottedIcon.displayName = 'DottedIcon';
DottedIcon.propTypes = {iconType: PropTypes.string};
DottedIcon.defaultProps = {iconType: 'Lines'};