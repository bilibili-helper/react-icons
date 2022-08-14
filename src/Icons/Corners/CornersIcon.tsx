import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const CornersIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Corners', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.88 2c-.403 0-.735 0-1.006.022-.281.023-.54.072-.782.196a2 2 0 0 0-.874.874c-.124.243-.173.501-.196.782C2 4.144 2 4.477 2 4.88v.62a.5.5 0 0 0 1 0v-.6c0-.428 0-.72.019-.944.018-.22.05-.332.09-.41a1 1 0 0 1 .437-.437c.078-.04.19-.072.41-.09C4.18 3 4.472 3 4.9 3h.6a.5.5 0 1 0 0-1h-.62Zm7.62 7a.5.5 0 0 0-.5.5v.6c0 .428 0 .72-.019.944-.018.22-.05.332-.09.41a1 1 0 0 1-.437.437c-.078.04-.19.072-.41.09-.225.019-.516.019-.944.019h-.6a.5.5 0 1 0 0 1h.62c.403 0 .735 0 1.006-.022.281-.023.54-.072.782-.196a2 2 0 0 0 .874-.874c.124-.243.173-.501.196-.782.022-.27.022-.603.022-1.005V9.5a.5.5 0 0 0-.5-.5ZM3 9.5v.6c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019h.6a.5.5 0 1 1 0 1h-.62c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C2 10.856 2 10.523 2 10.12V9.5a.5.5 0 0 1 1 0Zm8.044-6.481c.22.018.332.05.41.09a1 1 0 0 1 .437.437c.04.078.072.19.09.41.019.225.019.516.019.944v.6a.5.5 0 1 0 1 0v-.62c0-.403 0-.735-.022-1.006-.023-.281-.072-.54-.196-.782a2 2 0 0 0-.874-.874c-.243-.124-.501-.173-.782-.196C10.856 2 10.523 2 10.12 2H9.5a.5.5 0 1 0 0 1h.6c.428 0 .72 0 .944.019Z" fillRule="evenodd"/></svg>;
    }
);
CornersIconIcon.displayName = 'CornersIconIcon';
CornersIconIcon.propTypes = {iconType: PropTypes.string};
CornersIconIcon.defaultProps = {iconType: 'Corners'};

export default CornersIconIcon;