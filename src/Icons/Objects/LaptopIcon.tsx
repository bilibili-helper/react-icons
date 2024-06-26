import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LaptopIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 4.25V12H0v.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V12h-1V4.25C14 3.56 13.44 3 12.75 3H2.25C1.56 3 1 3.56 1 4.25ZM2.25 4h10.5a.25.25 0 0 1 .25.25v7.25H2V4.25A.25.25 0 0 1 2.25 4Z" fillRule="evenodd"/></svg>;
    }
);
LaptopIcon.displayName = 'LaptopIcon';
LaptopIcon.propTypes = {iconType: PropTypes.string};
LaptopIcon.defaultProps = {iconType: 'Objects'};