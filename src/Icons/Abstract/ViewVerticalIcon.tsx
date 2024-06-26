import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ViewVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10A1.5 1.5 0 0 1 1.5 1Zm12 1a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H8V2h5.5Zm-12 0a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H7V2H1.5Z" fillRule="evenodd"/></svg>;
    }
);
ViewVerticalIcon.displayName = 'ViewVerticalIcon';
ViewVerticalIcon.propTypes = {iconType: PropTypes.string};
ViewVerticalIcon.defaultProps = {iconType: 'Abstract'};