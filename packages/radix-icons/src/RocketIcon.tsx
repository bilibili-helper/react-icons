import * as React from 'react';
import { BaseIconProps } from './types';

interface RocketIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const RocketIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: RocketIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.35355 3.35351L8.35356 3.35349C8.97709 2.73 9.88638 2.2717 10.753 2.08926C11.6512 1.90017 12.3296 2.03669 12.6464 2.35354C12.9633 2.67041 13.0998 3.34882 12.9107 4.24697C12.7283 5.11358 12.27 6.02288 11.6464 6.64643L11.6464 6.64644L10.6464 7.64644L7.64644 10.6464L6.99999 11.2929L6.35353 10.6464C6.15827 10.4512 5.84169 10.4512 5.64643 10.6464C5.45117 10.8417 5.45117 11.1583 5.64643 11.3535L6.64644 12.3535C6.8417 12.5488 7.15828 12.5488 7.35355 12.3535L7.90072 11.8064L9.07124 13.7572C9.15045 13.8893 9.28608 13.9774 9.43889 13.9962C9.59171 14.0151 9.74467 13.9624 9.85354 13.8535L11.8535 11.8535C11.9648 11.7423 12.0172 11.5851 11.995 11.4293L11.5303 8.17677L12.3536 7.35354L12.3536 7.35353C13.13 6.57704 13.6717 5.48635 13.8893 4.45298C14.1002 3.45116 14.0367 2.3296 13.3536 1.64645C12.6704 0.963284 11.5488 0.899802 10.547 1.11071C9.51362 1.32826 8.42292 1.86995 7.64645 2.64639L7.64644 2.6464L6.82322 3.46966L3.57071 3.00502C3.41491 2.98276 3.25773 3.03516 3.14645 3.14644L1.14645 5.14644C1.03757 5.25531 0.984934 5.40827 1.00375 5.56108C1.02256 5.7139 1.11073 5.84952 1.24275 5.92874L3.19364 7.09926L2.64646 7.64644C2.55269 7.7402 2.50001 7.86738 2.50001 7.99999C2.50001 8.1326 2.55269 8.25978 2.64646 8.35354L3.64646 9.35355C3.84172 9.54881 4.15831 9.54881 4.35357 9.35355C4.54883 9.15829 4.54883 8.8417 4.35357 8.64644L3.70712 7.99999L4.35357 7.35355L4.00002 6.99999L4.35357 7.35355L7.35355 4.35354L7.35356 4.35354L8.35355 3.35351ZM9.59925 12.6936L8.62959 11.0775L10.6464 9.06065L10.9697 11.3232L9.59925 12.6936ZM5.93934 4.35355L3.92251 6.37039L2.30638 5.40072L3.67678 4.03032L5.93934 4.35355ZM2.35355 10.3535C2.54882 10.1583 2.54882 9.84169 2.35355 9.64642C2.15829 9.45116 1.84171 9.45116 1.64645 9.64642L0.646447 10.6464C0.451184 10.8417 0.451184 11.1583 0.646447 11.3535C0.841709 11.5488 1.15829 11.5488 1.35355 11.3535L2.35355 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04884 11.3417 3.85358 11.1464C3.65832 10.9512 3.34174 10.9512 3.14648 11.1464L1.14645 13.1464C0.951186 13.3417 0.951183 13.6583 1.14644 13.8535C1.3417 14.0488 1.65828 14.0488 1.85355 13.8535L3.85358 11.8536ZM5.35355 13.3535C5.54882 13.1583 5.54882 12.8417 5.35355 12.6464C5.15829 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45118 13.8417 3.45118 14.1583 3.64645 14.3535C3.84171 14.5488 4.15829 14.5488 4.35355 14.3535L5.35355 13.3535ZM8.85 5.5C8.85 5.14102 9.14102 4.85 9.5 4.85C9.85898 4.85 10.15 5.14102 10.15 5.5C10.15 5.85899 9.85898 6.15 9.5 6.15C9.14102 6.15 8.85 5.85899 8.85 5.5ZM9.5 3.95C8.64396 3.95 7.95 4.64396 7.95 5.5C7.95 6.35604 8.64396 7.05 9.5 7.05C10.356 7.05 11.05 6.35604 11.05 5.5C11.05 4.64396 10.356 3.95 9.5 3.95Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`RocketIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default RocketIcon;