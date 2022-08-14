import * as React from 'react';
import { IconProps } from '../types';

export const CookieIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M11.05 1.002c-.411.548.609 1.313 1.02.765.41-.548-.61-1.313-1.02-.765ZM5.98 3.737c-.112-.64.357-1.168.968-.825.485.272.319 1.063-.04 1.375-.439.38-.856-.135-.928-.55ZM4.114 5.052c-.28.28-.105.602.123.83a.5.5 0 0 0 .708 0c.464-.464-.35-1.312-.83-.83Zm3.88 1.096a.542.542 0 0 0-.373-.206c-.409-.046-.858.35-.644.778.335.67 1.511.072 1.017-.572ZM7.92 9.163c.355-.135.413-.766.253-1.089-.149-.299-.532-.396-.835-.28-.352.136-.48.593-.351.925l.002.006c.153.394.523.594.931.438Zm3.543.149c0 .4-.503.905-.899.97-.382.065-.858-.306-.797-.705.048-.312.356-.603.623-.736.368-.184 1.073-.013 1.073.471Zm-4.348 1.565h-.001c-.205.118-.4.367-.438.607-.085.52.457.64.852.615.68-.044.538-1.056.04-1.256-.232-.093-.423.017-.453.034Zm-2.031-.562c-.153-.518-.758-.602-1.117-.185a.5.5 0 0 0 .026.68l.003.004.003.004c.222.276.638.368.882.075a.5.5 0 0 0 .203-.578Zm-1.1-2.255c.624-.15.154-1.816-.937-1.186-.338.195-.18.76 0 .94.284.285.554.338.937.246Zm.6-6.35c-1.198.547-2.257 1.444-2.796 2.71-.412.968-.77 1.862-.787 3.025-.016 1.154.304 2.525 1.13 4.484.48 1.137 1.909 1.617 3.008 1.88 1.27.304 2.67.383 3.525.266.701-.096 1.48-.246 2.135-.777 1.099-.893 2.102-1.901 2.7-2.958.605-1.067.827-2.247.223-3.386-.16-.3-.406-.376-.68-.46-.105-.033-.212-.066-.321-.113-1.1-.478-1.756-1.03-1.808-1.351-.047-.3.01-.514.068-.737a2.78 2.78 0 0 0 .082-.383c.02-.172.018-.576-.363-.781-.295-.16-.484-.47-.66-.759a7.7 7.7 0 0 0-.128-.207c-.286-.438-.704-1-1.52-1.084a7.53 7.53 0 0 0-3.808.631Zm-1.876 3.1c-.41.964-.694 1.699-.707 2.648-.014.956.25 2.179 1.052 4.081.339.803 1.569 1.117 2.319 1.296 1.177.282 2.45.345 3.157.248.684-.093 1.217-.219 1.64-.562 1.06-.862 1.952-1.778 2.46-2.675.306-.539.885-2.143 0-2.459-1.875-.668-2.367-1.32-2.639-1.974-.18-.436-.161-.89-.033-1.334.02-.066.038-.131.076-.19a2.392 2.392 0 0 1-.518-.518 4.38 4.38 0 0 1-.253-.392c-.243-.408-.512-.859-.972-.906A6.531 6.531 0 0 0 5 2.619c-1.034.472-1.873 1.212-2.29 2.191Zm9.374-1.708c-.5.625.82 1.39 1.126.673.233-.548-.753-1.139-1.126-.673Zm2.49-2.153c-.764-.218-.98 1.292-.205 1.311.6.015.788-1.144.205-1.31Zm-.089 3.33c-.737-.135-.946.8-.197.812.578.009.76-.709.197-.812Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CookieIconIcon.displayName = 'CookieIconIcon';

export default CookieIconIcon;
