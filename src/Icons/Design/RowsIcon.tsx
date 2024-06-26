import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const RowsIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 12.85v1.3h13v-1.3H1Zm0-4v1.3h13v-1.3H1Zm13-4v1.3H1v-1.3h13Zm-13-4v1.3h13V.85H1Z" fillRule="evenodd"/></svg>;
    }
);
RowsIcon.displayName = 'RowsIcon';
RowsIcon.propTypes = {iconType: PropTypes.string};
RowsIcon.defaultProps = {iconType: 'Design'};