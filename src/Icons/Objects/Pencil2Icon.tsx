import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Pencil2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m12.854 1.146 2 2a.5.5 0 0 1 0 .708L10.91 7.796a1 1 0 0 1-.26.188L6.724 9.947a.5.5 0 0 1-.671-.67l1.963-3.928a1 1 0 0 1 .188-.26l3.942-3.943a.5.5 0 0 1 .708 0ZM8.91 5.796 7.873 7.873l.254.254 2.077-1.038L13.793 3.5 12.5 2.207l-3.59 3.59ZM9 3H4.9c-.428 0-.72 0-.944.019-.22.018-.332.05-.41.09a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41C3 4.18 3 4.472 3 4.9v6.2c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019h6.2c.428 0 .72 0 .944-.019.22-.018.332-.05.41-.09a1 1 0 0 0 .437-.437c.04-.078.072-.19.09-.41.019-.225.019-.516.019-.944V7l1-1v5.12c0 .403 0 .735-.022 1.006-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022H4.879c-.402 0-.734 0-1.005-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C2 11.856 2 11.523 2 11.12V4.879c0-.402 0-.734.022-1.005.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196C4.144 2 4.477 2 4.88 2H10L9 3Z" fillRule="evenodd"/></svg>;
    }
);
Pencil2Icon.displayName = 'Pencil2Icon';
Pencil2Icon.propTypes = {iconType: PropTypes.string};
Pencil2Icon.defaultProps = {iconType: 'Objects'};