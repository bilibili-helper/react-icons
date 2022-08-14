import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DotFilledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 9.875a2.375 2.375 0 1 1 0-4.75 2.375 2.375 0 0 1 0 4.75Z"/></svg>;
    }
);
DotFilledIconIcon.displayName = 'DotFilledIconIcon';
DotFilledIconIcon.propTypes = {iconType: PropTypes.string};
DotFilledIconIcon.defaultProps = {iconType: 'Abstract'};

export default DotFilledIconIcon;