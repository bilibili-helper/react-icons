import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const EnterFullScreenIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5 2h3a.5.5 0 1 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5Zm7 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V3H9.5a.5.5 0 1 1 0-1ZM3 9.5V12h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0Zm10 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 1 0Z" fillRule="evenodd"/></svg>;
    }
);
EnterFullScreenIcon.displayName = 'EnterFullScreenIcon';
EnterFullScreenIcon.propTypes = {iconType: PropTypes.string};
EnterFullScreenIcon.defaultProps = {iconType: 'Abstract'};