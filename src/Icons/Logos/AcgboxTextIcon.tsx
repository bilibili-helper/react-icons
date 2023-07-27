import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const AcgboxTextIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="45" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M33.698 4.244a3.189 3.189 0 1 0 0 6.377 3.189 3.189 0 0 0 0-6.377Zm0 5.34a2.152 2.152 0 1 1 .012-4.304 2.152 2.152 0 0 1-.012 4.305ZM21.39 7.424a3.186 3.186 0 1 0-1.036 2.355v.373c0 1.185-.888 2.212-2.328 2.212a2.425 2.425 0 0 1-1.958-1.067.491.491 0 0 0-.868.14.497.497 0 0 0 .068.44 3.27 3.27 0 0 0 2.819 1.457 3.237 3.237 0 0 0 3.304-3.28v-2.63Zm-3.188 2.152a2.152 2.152 0 1 1 2.152-2.152 2.155 2.155 0 0 1-2.152 2.16v-.008Zm7.899-5.329a3.18 3.18 0 0 0-2.121.81v-2.86a.533.533 0 1 0-1.067 0v5.227A3.189 3.189 0 1 0 26.1 4.247Zm0 5.338a2.15 2.15 0 1 1 0-4.298 2.15 2.15 0 0 1 0 4.298ZM4.186 10.634a3.174 3.174 0 0 0 2.122-.81v.285a.537.537 0 1 0 1.07 0V7.445a3.189 3.189 0 1 0-3.192 3.189Zm0-5.338a2.15 2.15 0 1 1-2.15 2.149 2.152 2.152 0 0 1 2.15-2.143v-.006Zm8.848 4.001a2.158 2.158 0 1 1 0-3.695.512.512 0 0 0 .649-.097.521.521 0 0 0-.1-.81 3.168 3.168 0 0 0-1.704-.451 3.201 3.201 0 0 0 .048 6.402c.588 0 1.164-.163 1.665-.47a.518.518 0 0 0 .109-.791.53.53 0 0 0-.667-.088Zm28.533-1.873 2.26-2.259a.544.544 0 1 0-.766-.773L40.8 6.654l-2.26-2.259a.543.543 0 0 0-.767.767l2.259 2.262-2.258 2.258a.544.544 0 1 0 .766.773l2.26-2.259 2.261 2.259a.543.543 0 1 0 .767-.767l-2.261-2.264Z" fill="#040000"/></svg>;
    }
);
AcgboxTextIcon.displayName = 'AcgboxTextIcon';
AcgboxTextIcon.propTypes = {iconType: PropTypes.string};
AcgboxTextIcon.defaultProps = {iconType: 'Logos'};