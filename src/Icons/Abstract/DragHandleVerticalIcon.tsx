import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DragHandleVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 12.9a.4.4 0 0 0 .4-.4v-10a.4.4 0 0 0-.8 0v10c0 .22.18.4.4.4Zm2 0a.4.4 0 0 0 .4-.4v-10a.4.4 0 0 0-.8 0v10c0 .22.18.4.4.4Zm1.6-.4v-10a.4.4 0 0 1 .8 0v10a.4.4 0 0 1-.8 0Zm2.4.4a.4.4 0 0 0 .4-.4v-10a.4.4 0 0 0-.8 0v10c0 .22.18.4.4.4Z" fillRule="evenodd"/></svg>;
    }
);
DragHandleVerticalIcon.displayName = 'DragHandleVerticalIcon';
DragHandleVerticalIcon.propTypes = {iconType: PropTypes.string};
DragHandleVerticalIcon.defaultProps = {iconType: 'Abstract'};