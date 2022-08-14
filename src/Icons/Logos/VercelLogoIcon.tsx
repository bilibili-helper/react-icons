import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const VercelLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.6 13h13.8L7.5 1 .6 13Zm1.729-1H12.67L7.5 3.006 2.329 12Z" fillRule="evenodd"/></svg>;
    }
);
VercelLogoIconIcon.displayName = 'VercelLogoIconIcon';
VercelLogoIconIcon.propTypes = {iconType: PropTypes.string};
VercelLogoIconIcon.defaultProps = {iconType: 'Logos'};

export default VercelLogoIconIcon;