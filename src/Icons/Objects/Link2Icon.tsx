import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const Link2IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M10.679 2.954c.144.095.298.245.71.657.412.412.562.566.657.71.417.636.408 1.49-.051 2.167-.105.155-.267.32-.694.747l-.62.619a.5.5 0 1 0 .708.707l.662-.662c.37-.37.606-.606.771-.849.675-.994.71-2.287.06-3.278-.159-.241-.39-.472-.741-.823l-.09-.09c-.35-.351-.582-.582-.823-.74-.99-.65-2.284-.616-3.278.06-.243.164-.48.4-.85.77l-.66.662a.5.5 0 1 0 .706.707l.62-.618c.426-.427.592-.59.746-.695.676-.46 1.531-.468 2.167-.05ZM4.318 6.44a.5.5 0 0 0-.707 0l-.662.661c-.37.37-.606.606-.771.85-.675.993-.71 2.287-.06 3.277.159.242.39.473.741.824l.09.09c.35.35.582.582.823.74.99.65 2.284.616 3.278-.06.243-.165.48-.401.849-.771l.662-.662a.5.5 0 0 0-.708-.707l-.618.619c-.427.427-.593.59-.747.694-.676.46-1.532.469-2.167.051-.144-.094-.298-.245-.71-.657-.412-.412-.562-.566-.657-.71-.417-.635-.408-1.49.051-2.167.105-.154.267-.32.694-.747l.619-.618a.5.5 0 0 0 0-.707Zm5.304-1.062a.5.5 0 0 0-.707 0L5.379 8.914a.5.5 0 1 0 .707.707l3.536-3.535a.5.5 0 0 0 0-.708Z" fillRule="evenodd"/></svg>;
    }
);
Link2IconIcon.displayName = 'Link2IconIcon';
Link2IconIcon.propTypes = {iconType: PropTypes.string};
Link2IconIcon.defaultProps = {iconType: 'Objects'};

export default Link2IconIcon;