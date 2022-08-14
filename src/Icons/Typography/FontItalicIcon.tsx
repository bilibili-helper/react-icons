import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const FontItalicIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.125 3.05h4.5a.45.45 0 0 1 0 .9h-1.62l-1.774 7.1h1.644a.45.45 0 1 1 0 .9h-4.5a.45.45 0 1 1 0-.9h1.619l1.775-7.1H6.125a.45.45 0 1 1 0-.9Z"/></svg>;
    }
);
FontItalicIconIcon.displayName = 'FontItalicIconIcon';
FontItalicIconIcon.propTypes = {iconType: PropTypes.string};
FontItalicIconIcon.defaultProps = {iconType: 'Typography'};

export default FontItalicIconIcon;