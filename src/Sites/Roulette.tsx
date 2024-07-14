import '../CSS/Roulette.css';
import TopBar from '../Components/TopBar';
import LivePlayerBar from '../Components/LivePlayerBar';
import { FC } from 'react';
import RouletteWheel from '../Components/RouletteWheel';

const Roulette:FC = () => {
   return (
      <>
       <TopBar />
       <LivePlayerBar />
       <div className='backgroundRoulette flex'>
         <div className=' h-full w-1/2 flex justify-center items-center'>
          <RouletteWheel />
         </div>
         <div className=' h-full w-1/2'>
         </div>
       </div>
      </>
   );
}

export default Roulette;