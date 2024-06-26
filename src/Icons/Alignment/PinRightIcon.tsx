import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const PinRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.5 1.05a.45.45 0 0 0-.45.45v12a.45.45 0 0 0 .9 0v-12a.45.45 0 0 0-.45-.45ZM5.932 3.932a.45.45 0 0 0 0 .636L8.414 7.05H.5a.45.45 0 0 0 0 .9h7.914l-2.482 2.482a.45.45 0 0 0 .636.636l3.25-3.25a.45.45 0 0 0 0-.636l-3.25-3.25a.45.45 0 0 0-.636 0Z" fillRule="evenodd"/></svg>;
    }
);
PinRightIcon.displayName = 'PinRightIcon';
PinRightIcon.propTypes = {iconType: PropTypes.string};
PinRightIcon.defaultProps = {iconType: 'Alignment'};