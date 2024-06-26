import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DragHandleHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.1 4.5c0 .22.18.4.4.4h10a.4.4 0 0 0 0-.8h-10a.4.4 0 0 0-.4.4Zm0 2c0 .22.18.4.4.4h10a.4.4 0 0 0 0-.8h-10a.4.4 0 0 0-.4.4Zm.4 1.6h10a.4.4 0 0 1 0 .8h-10a.4.4 0 0 1 0-.8Zm-.4 2.4c0 .22.18.4.4.4h10a.4.4 0 0 0 0-.8h-10a.4.4 0 0 0-.4.4Z" fillRule="evenodd"/></svg>;
    }
);
DragHandleHorizontalIcon.displayName = 'DragHandleHorizontalIcon';
DragHandleHorizontalIcon.propTypes = {iconType: PropTypes.string};
DragHandleHorizontalIcon.defaultProps = {iconType: 'Abstract'};