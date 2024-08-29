import '../CSS/Roulette.css';
import TopBar from '../Components/TopBar';
import LivePlayerBar from '../Components/LivePlayerBar';
import { FC } from 'react';
import RouletteWheel from '../Components/RouletteWheel';
import NeonIcon from '../SVG/NeonSpin';
import MessagesBox from '../Components/messages';
import LiveChat from '../Components/LiveChat';
import PlaceBets from '../Components/PlaceBets';

const Roulette:FC = () => {
   return (
      <>
       <TopBar />
       <LivePlayerBar />
       <div className='backgroundRoulette flex'>
         <div className=' h-full flex justify-center items-center p-10' style={{width: "85%"}}>
          <div style={{width: "40%"}}>
           <PlaceBets />
          </div>
          <div className=' pr-36 pt-9' style={{width: "60%", height: "100%"}}>
           <RouletteWheel />
          </div>
         </div>
         <div className=' flex justify-center items-center h-full pb-3' style={{width: "15%"}}>
           <LiveChat />
         </div>
       </div>
      </>
   );
}

export default Roulette;