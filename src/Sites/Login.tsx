import { FC } from 'react';
import '../CSS/Login.css';
import NeonName from '../SVG/NeonName';

const LoginPage:FC = () => {
   return (
      <>
       <div className='background11'></div>
       <div className='background2 flex'>
         <div className=' h-full w-full flex justify-center items-center'>
          <NeonName nameHeight={270} nameWidth={270} />
         </div>
       </div>
      </>
   );
}

export default LoginPage;