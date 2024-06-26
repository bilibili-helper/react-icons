import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Share2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3 5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1.25a.5.5 0 0 1 0-1h1.25A1.5 1.5 0 0 1 13 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-6A1.5 1.5 0 0 1 3.5 4h1.25a.5.5 0 1 1 0 1H3.5a.5.5 0 0 0-.5.5Zm2.568-2.432a.45.45 0 0 1-.636-.636l2.25-2.25a.45.45 0 0 1 .636 0l2.25 2.25a.45.45 0 0 1-.636.636L8 1.636V8.5a.5.5 0 1 1-1 0V1.636L5.568 3.068Z" fillRule="evenodd"/></svg>;
    }
);
Share2Icon.displayName = 'Share2Icon';
Share2Icon.propTypes = {iconType: PropTypes.string};
Share2Icon.defaultProps = {iconType: 'Abstract'};