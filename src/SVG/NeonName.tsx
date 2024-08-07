import { FC } from 'react';
import '../CSS/SVG.css';

interface NeonNameProps {
   nameHeight: number;
   nameWidth: number;
 }
 

const NeonName: FC<NeonNameProps> = ({ nameHeight, nameWidth }) => {
   return (
   <svg width={`${nameWidth}px`} height={`${nameHeight}px`} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155 20.88">
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <g>
            <path className="cls-2" d="m3.6,20.59V.29h2.32c3.16,4.87,10.59,16.21,11.86,18.42h.03c-.17-2.93-.15-5.92-.15-9.22V.29h1.6v20.3h-2.15C14.1,15.9,6.56,4.09,5.11,1.86h-.03c.15,2.67.12,5.63.12,9.31v9.43h-1.6Z"/>
            <path className="cls-2" d="m38.46,10.62h-10.36v8.53h11.34l-.23,1.45h-12.68V.29h12.44v1.45h-10.88v7.43h10.36v1.45Z"/>
            <path className="cls-2" d="m61.69,10.3c0,5.54-2.96,10.59-9.22,10.59-5.71,0-9.05-4.61-9.05-10.44S46.63,0,52.67,0c5.57,0,9.02,4.38,9.02,10.3Zm-16.59.06c0,4.67,2.58,9.08,7.46,9.08,5.25,0,7.45-4.29,7.45-9.11s-2.49-8.88-7.4-8.88c-5.22,0-7.51,4.32-7.51,8.91Z"/>
            <path className="cls-2" d="m67.45,20.59V.29h2.32c3.16,4.87,10.59,16.21,11.86,18.42h.03c-.17-2.93-.15-5.92-.15-9.22V.29h1.6v20.3h-2.15c-3.02-4.7-10.56-16.5-12.01-18.74h-.03c.15,2.67.12,5.63.12,9.31v9.43h-1.6Z"/>
            <path className="cls-2" d="m90.25,15.14c.61,2.7,2.41,4.29,5.74,4.29,3.71,0,5.13-1.86,5.13-4.06s-1.02-3.71-5.48-4.82c-4.29-1.07-6.15-2.47-6.15-5.4,0-2.67,1.94-5.16,6.29-5.16s6.35,2.73,6.61,5.19h-1.62c-.46-2.18-1.89-3.74-5.08-3.74-2.93,0-4.52,1.36-4.52,3.63s1.33,3.1,5.08,4.03c5.71,1.42,6.56,3.71,6.56,6.15,0,2.99-2.18,5.57-6.88,5.57-5.08,0-6.93-2.96-7.31-5.69h1.62Z"/>
            <path className="cls-2" d="m108.55.29h7.25c3.71,0,6.27,2.06,6.27,5.66s-2.52,5.8-6.47,5.8h-5.45v8.85h-1.6V.29Zm1.6,10.01h5.6c3.28,0,4.64-1.74,4.64-4.29,0-2.73-1.8-4.26-4.53-4.26h-5.71v8.56Z"/>
            <path className="cls-2" d="m129.05.29v20.3h-1.57V.29h1.57Z"/>
            <path className="cls-2" d="m136.33,20.59V.29h2.32c3.16,4.87,10.59,16.21,11.86,18.42h.03c-.17-2.93-.15-5.92-.15-9.22V.29h1.6v20.3h-2.15c-3.02-4.7-10.56-16.5-12.01-18.74h-.03c.15,2.67.12,5.63.12,9.31v9.43h-1.6Z"/>
          </g>
          <rect className="cls-2" y="9.53" width="155" height=".69"/>
        </g>
      </g>
    </svg>
   );
}

export default NeonName;