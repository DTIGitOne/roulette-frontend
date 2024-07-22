import '../CSS/Roulette.css';
import TopBar from '../Components/TopBar';
import LivePlayerBar from '../Components/LivePlayerBar';
import { FC } from 'react';
import RouletteWheel from '../Components/RouletteWheel';
import NeonIcon from '../SVG/NeonSpin';
import MessagesBox from '../Components/messages';

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
          <MessagesBox />
         </div>
       </div>
      </>
   );
}

export default Roulette;