import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const FontStyleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.4 9.249c.284-.129.695-.115.87.205.584 1.06 1.376 1.274 2.217 1.274 1.04 0 1.81-.467 1.81-1.274 0-.65-.385-.99-1.426-1.311l-.712-.221c-1.514-.473-2.27-1.23-2.27-2.466 0-1.659 1.387-2.769 3.354-2.769 1.674 0 2.731.648 3.195 1.624.133.278.138.602-.21.88s-.704.157-.995-.153c-.76-.811-1.238-.988-1.977-.988-1.116 0-1.709.586-1.709 1.23 0 .586.416.952 1.4 1.254l.732.227c1.55.473 2.295 1.199 2.295 2.41 0 1.601-1.28 2.92-3.513 2.92-1.595 0-3.06-.978-3.423-2.11-.103-.323.078-.604.362-.732Zm8.765-2.261c0-1.12.999-1.942 2.448-1.942 1.242 0 2.05.587 2.365 1.589.066.211-.019.345-.23.414-.209.068-.43.05-.51-.153-.302-.773-.886-1.133-1.638-1.133-.953 0-1.587.489-1.587 1.153 0 .535.333.834 1.234 1.128l.588.189c1.227.397 1.717.905 1.717 1.785 0 1.18-1.071 2.026-2.56 2.026-1.348 0-2.336-.763-2.572-1.708-.055-.217-.008-.307.28-.374.289-.067.371-.063.471.175.284.674.982 1.19 1.86 1.19.96 0 1.652-.547 1.652-1.264 0-.527-.287-.775-1.246-1.088l-.588-.195c-1.188-.385-1.684-.919-1.684-1.792Z" fillRule="evenodd"/></svg>;
    }
);
FontStyleIcon.displayName = 'FontStyleIcon';
FontStyleIcon.propTypes = {iconType: PropTypes.string};
FontStyleIcon.defaultProps = {iconType: 'Typography'};