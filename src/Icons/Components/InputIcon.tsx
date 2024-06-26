import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const InputIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6 1.5a.5.5 0 0 0 .5.5c.627 0 .957.2 1.156.478C7.878 2.79 8 3.288 8 4v7c0 .712-.122 1.21-.344 1.522-.199.278-.53.478-1.156.478a.5.5 0 0 0 0 1c.873 0 1.543-.3 1.97-.897l.03-.044.03.044c.427.597 1.097.897 1.97.897a.5.5 0 0 0 0-1c-.627 0-.957-.2-1.156-.478C9.122 12.21 9 11.712 9 11V4c0-.712.122-1.21.344-1.522C9.543 2.2 9.874 2 10.5 2a.5.5 0 0 0 0-1c-.873 0-1.543.3-1.97.897l-.03.044a2.18 2.18 0 0 0-.03-.044C8.042 1.3 7.372 1 6.5 1a.5.5 0 0 0-.5.5ZM11 5V4h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v-1h3V5h-3ZM6 5H1v5h5v1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v1Z" fillRule="evenodd"/></svg>;
    }
);
InputIcon.displayName = 'InputIcon';
InputIcon.propTypes = {iconType: PropTypes.string};
InputIcon.defaultProps = {iconType: 'Components'};