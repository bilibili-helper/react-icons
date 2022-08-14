import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const TriangleRightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m6 4 4.5 3.5L6 11V4Z"/></svg>;
    }
);
TriangleRightIconIcon.displayName = 'TriangleRightIconIcon';
TriangleRightIconIcon.propTypes = {iconType: PropTypes.string};
TriangleRightIconIcon.defaultProps = {iconType: 'Arrows'};

export default TriangleRightIconIcon;