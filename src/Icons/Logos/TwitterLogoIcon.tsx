import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TwitterLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M10.36 1.569c1.014 0 1.823.479 2.365 1.175a5.245 5.245 0 0 0 1.626-.629 2.634 2.634 0 0 1-1.148 1.45l.002.003a5.26 5.26 0 0 0 1.5-.413l-.001.002a5.34 5.34 0 0 1-1.248 1.313c.026.177.04.354.04.53 0 3.687-2.809 7.975-7.975 7.975a7.929 7.929 0 0 1-4.296-1.26.5.5 0 0 1-.108-.748.45.45 0 0 1 .438-.215c.916.108 1.83-.003 2.637-.356a3.086 3.086 0 0 1-1.69-1.876.45.45 0 0 1 .103-.448 3.07 3.07 0 0 1-1.045-2.31v-.034a.45.45 0 0 1 .365-.442 3.068 3.068 0 0 1-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 0 1 .323-.208.5.5 0 0 1 .538.161 6.964 6.964 0 0 0 4.46 2.507v-.044c0-1.727 1.4-3.127 3.126-3.127ZM3.272 11.602a5.318 5.318 0 0 0 2.39-1.042.45.45 0 0 0-.27-.804 2.174 2.174 0 0 1-1.714-.888c.19-.015.376-.048.556-.096a.45.45 0 0 0-.028-.876 2.18 2.18 0 0 1-1.644-1.474c.2.048.409.077.623.084a.45.45 0 0 0 .265-.824 2.177 2.177 0 0 1-.97-1.812c0-.168.003-.317.013-.453a7.95 7.95 0 0 0 5.282 2.376.5.5 0 0 0 .513-.61 2.127 2.127 0 0 1 2.071-2.614c1.234 0 2.136 1.143 2.136 2.432 0 3.256-2.476 6.974-6.975 6.974a6.936 6.936 0 0 1-2.249-.373Z" fillRule="evenodd"/></svg>;
    }
);
TwitterLogoIcon.displayName = 'TwitterLogoIcon';
TwitterLogoIcon.propTypes = {iconType: PropTypes.string};
TwitterLogoIcon.defaultProps = {iconType: 'Logos'};