import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TextAlignRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5 4h10a.5.5 0 0 1 0 1h-10a.5.5 0 1 1 0-1Zm5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 1 1 0-1Zm-3 3h8a.5.5 0 0 1 0 1h-8a.5.5 0 1 1 0-1Z" fillRule="evenodd"/></svg>;
    }
);
TextAlignRightIcon.displayName = 'TextAlignRightIcon';
TextAlignRightIcon.propTypes = {iconType: PropTypes.string};
TextAlignRightIcon.defaultProps = {iconType: 'Typography'};