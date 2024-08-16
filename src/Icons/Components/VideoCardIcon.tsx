import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const VideoCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.457 1c.16.002.304.01.435.041A1.5 1.5 0 0 1 14 2.15c.042.174.042.371.042.6l-.001 2.666c-.002.16-.01.303-.04.434a1.5 1.5 0 0 1-1.11 1.109c-.174.041-.37.041-.6.041H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 0 1 1.04 5.85C1 5.676 1 5.48 1 5.25V2.584c.002-.16.01-.303.041-.434A1.5 1.5 0 0 1 2.15 1.04c.174-.04.37-.04.6-.04Zm-.068 1H2.61c-.15.002-.195.006-.228.014a.5.5 0 0 0-.37.37A1.134 1.134 0 0 0 2 2.611V5.39c.001.15.005.195.013.228a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h9.4c.308 0 .374-.003.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V2.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37 1.134 1.134 0 0 0-.227-.012Zm.461 6.041a1.5 1.5 0 0 1 1.11 1.109c.041.174.041.371.041.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.109c-.174.041-.371.041-.6.041h-9.5c-.229 0-.426 0-.6-.041A1.5 1.5 0 0 1 1.04 12.85a1.976 1.976 0 0 1-.04-.434V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.13-.031.274-.039.434-.04h9.666c.229 0 .426 0 .6.041Zm-.461.96H2.61a1.09 1.09 0 0 0-.228.013.5.5 0 0 0-.37.37A1.134 1.134 0 0 0 2 9.611v2.778c.001.15.005.195.013.228a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h9.4c.308 0 .374-.003.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37 1.134 1.134 0 0 0-.227-.012Z" fillRule="evenodd"/></svg>;
    }
);
VideoCardIcon.displayName = 'VideoCardIcon';
VideoCardIcon.propTypes = {iconType: PropTypes.string};
VideoCardIcon.defaultProps = {iconType: 'Components'};