import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const RecordIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><rect x="2" y="2" width="11" height="11" rx="5.5" fillRule="evenodd"/></svg>;
    }
);
RecordIconIcon.displayName = 'RecordIconIcon';
RecordIconIcon.propTypes = {iconType: PropTypes.string};
RecordIconIcon.defaultProps = {iconType: 'Player'};

export default RecordIconIcon;