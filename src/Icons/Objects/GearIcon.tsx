import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const GearIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 9.925a2.425 2.425 0 1 1 0-4.85 2.425 2.425 0 0 1 0 4.85Zm0-.9a1.525 1.525 0 1 1 0-3.05 1.525 1.525 0 0 1 0 3.05ZM6.242 1.312l-.238 1.05c-.38.11-.74.262-1.08.448l-.91-.574a.85.85 0 0 0-1.055.118l-.606.606a.85.85 0 0 0-.118 1.054l.574.912c-.186.339-.337.7-.447 1.079l-1.05.238a.85.85 0 0 0-.662.829v.857a.85.85 0 0 0 .662.829l1.05.238c.11.379.261.74.448 1.08l-.575.91a.85.85 0 0 0 .118 1.055l.607.606a.85.85 0 0 0 1.054.118l.911-.574c.339.186.7.337 1.079.447l.238 1.05a.85.85 0 0 0 .829.662h.857a.85.85 0 0 0 .83-.662l.237-1.05c.38-.11.74-.26 1.08-.447l.911.574a.85.85 0 0 0 1.054-.118l.606-.606a.85.85 0 0 0 .118-1.054l-.574-.911c.187-.34.338-.7.448-1.08l1.05-.238a.85.85 0 0 0 .662-.829v-.857a.85.85 0 0 0-.662-.83l-1.05-.237c-.11-.38-.26-.74-.447-1.08l.574-.91a.85.85 0 0 0-.118-1.055l-.606-.606a.85.85 0 0 0-1.055-.118l-.91.574a5.322 5.322 0 0 0-1.081-.448l-.238-1.05A.85.85 0 0 0 7.928.65h-.857a.85.85 0 0 0-.829.662Zm.473 1.756L7.071 1.5h.857l.356 1.568a4.48 4.48 0 0 1 1.795.744l1.36-.857.607.606-.858 1.36c.37.527.628 1.136.744 1.795l1.568.356v.857l-1.568.355a4.476 4.476 0 0 1-.744 1.796l.857 1.36-.606.606-1.36-.857a4.476 4.476 0 0 1-1.795.743L7.928 13.5h-.857l-.356-1.568a4.476 4.476 0 0 1-1.794-.744l-1.36.858-.607-.606.858-1.36a4.476 4.476 0 0 1-.744-1.795L1.5 7.929v-.857l1.568-.356a4.476 4.476 0 0 1 .744-1.794L2.954 3.56l.606-.606 1.36.858a4.476 4.476 0 0 1 1.795-.745Z" fillRule="evenodd"/></svg>;
    }
);
GearIcon.displayName = 'GearIcon';
GearIcon.propTypes = {iconType: PropTypes.string};
GearIcon.defaultProps = {iconType: 'Objects'};