import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ShadowInnerIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fillRule="evenodd"><path d="m3.852 12.162-.482-.132c1.084-3.974 4.686-7.577 8.66-8.66l.132.482c-3.804 1.037-7.273 4.506-8.31 8.31Z" opacity=".05"/><path d="m3.427 11.88-.481-.134c1.125-4.015 4.785-7.675 8.8-8.8l.135.481c-3.847 1.078-7.375 4.607-8.454 8.454Z" opacity=".1"/><path d="m3.028 11.512-.48-.143c1.189-3.99 4.839-7.638 8.83-8.823l.142.48c-3.829 1.136-7.352 4.657-8.492 8.486Z" opacity=".15"/><path d="m2.663 11.043-.475-.154C3.453 7 7.004 3.45 10.892 2.186l.155.476C7.31 3.877 3.879 7.308 2.663 11.043Z" opacity=".2"/><path d="m2.328 10.507-.47-.17C3.204 6.6 6.61 3.195 10.35 1.854l.169.47c-3.6 1.291-6.896 4.586-8.192 8.184Z" opacity=".25"/><path d="m2.034 9.896-.464-.187c1.417-3.528 4.617-6.728 8.146-8.142l.186.464C6.5 3.395 3.4 6.494 2.034 9.896Z" opacity=".3"/><path d="m1.793 9.197-.455-.205c1.467-3.257 4.407-6.194 7.664-7.66l.205.457C6.061 3.204 3.211 6.052 1.793 9.197Z" opacity=".35"/><path d="m1.626 8.398-.446-.226c1.48-2.908 4.092-5.519 7-6.997l.227.446C5.593 3.05 3.058 5.585 1.626 8.398Z" opacity=".4"/><path d="m1.572 7.454-.432-.252c1.425-2.45 3.62-4.644 6.07-6.067l.252.432c-2.375 1.38-4.508 3.512-5.89 5.887Z" opacity=".45"/><path d="m1.704 6.305-.414-.28a17.886 17.886 0 0 1 4.734-4.734l.28.414a17.387 17.387 0 0 0-4.6 4.6Z" opacity=".5"/><path d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5a5.673 5.673 0 1 0 11.346 0 5.673 5.673 0 0 0-11.346 0Z"/></g></svg>;
    }
);
ShadowInnerIcon.displayName = 'ShadowInnerIcon';
ShadowInnerIcon.propTypes = {iconType: PropTypes.string};
ShadowInnerIcon.defaultProps = {iconType: 'Design'};