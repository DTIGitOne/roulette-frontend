import '../CSS/Roulette.css';
import TopBar from '../Components/TopBar';
import LivePlayerBar from '../Components/LivePlayerBar';
import { FC } from 'react';
import RouletteWheel from '../Components/RouletteWheel';
import NeonIcon from '../SVG/NeonSpin';
import MessagesBox from '../Components/messages';
import LiveChat from '../Components/LiveChat';

const Roulette:FC = () => {
   return (
      <>
       <TopBar />
       <LivePlayerBar />
       <div className='backgroundRoulette flex'>
         <div className=' h-full  flex justify-center items-center' style={{width: "46%"}}>
          <RouletteWheel />
         </div>
         <div className=' flex justify-center items-center h-full p-3' style={{width: "54%"}}>
          <div className=' h-full w-3/4'></div>
          <div className=' h-full w-1/4'>
           <LiveChat />
          </div>
         </div>
       </div>
      </>
   );
}

export default Roulette;