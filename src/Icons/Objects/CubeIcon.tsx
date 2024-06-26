import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CubeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.711.797 6 2.8A.5.5 0 0 1 14 4.05v6.9a.5.5 0 0 1-.289.453l-6 2.8a.5.5 0 0 1-.422 0l-6-2.8A.5.5 0 0 1 1 10.95v-6.9a.5.5 0 0 1 .289-.453l6-2.8a.5.5 0 0 1 .422 0ZM7 6.93v6.034l-5-2.333V4.806L7 6.93Zm6 3.7V4.807L8 6.93v6.034l5-2.333Zm-.728-6.602L7.5 1.802 2.728 4.029 7.5 6.057l4.772-2.028Z" fillRule="evenodd"/></svg>;
    }
);
CubeIcon.displayName = 'CubeIcon';
CubeIcon.propTypes = {iconType: PropTypes.string};
CubeIcon.defaultProps = {iconType: 'Objects'};