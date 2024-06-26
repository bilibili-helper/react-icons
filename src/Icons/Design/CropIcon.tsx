import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CropIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4 .5V3h7.5a.5.5 0 0 1 .5.5V11h2.5a.5.5 0 1 1 0 1H12v2.5a.5.5 0 0 1-1 0V12H3.5a.5.5 0 0 1-.5-.5V4H.5a.5.5 0 1 1 0-1H3V.5a.5.5 0 0 1 1 0ZM4 11h7V4H4v7Z" fillRule="evenodd"/></svg>;
    }
);
CropIcon.displayName = 'CropIcon';
CropIcon.propTypes = {iconType: PropTypes.string};
CropIcon.defaultProps = {iconType: 'Design'};