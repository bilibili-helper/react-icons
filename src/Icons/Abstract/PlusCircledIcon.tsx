import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const PlusCircledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 4.5V7h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 1 0Zm-7.123 3a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z" fillRule="evenodd"/></svg>;
    }
);
PlusCircledIconIcon.displayName = 'PlusCircledIconIcon';
PlusCircledIconIcon.propTypes = {iconType: PropTypes.string};
PlusCircledIconIcon.defaultProps = {iconType: 'Abstract'};

export default PlusCircledIconIcon;