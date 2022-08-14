import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SolidIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Lines', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.75 7h11.5a.5.5 0 0 1 0 1H1.75a.5.5 0 1 1 0-1Z"/></svg>;
    }
);
SolidIconIcon.displayName = 'SolidIconIcon';
SolidIconIcon.propTypes = {iconType: PropTypes.string};
SolidIconIcon.defaultProps = {iconType: 'Lines'};

export default SolidIconIcon;