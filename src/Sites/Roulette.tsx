import '../CSS/Roulette.css';
import TopBar from '../Components/TopBar';
import LivePlayerBar from '../Components/LivePlayerBar';
import { FC, useEffect, useState } from 'react';
import RouletteWheel from '../Components/RouletteWheel';
import LiveChat from '../Components/LiveChat';
import PlaceBets from '../Components/PlaceBets';
import RouletteDetails from '../Components/RouletteDetails';
import LastColors from '../Components/LastWins';
import { socketConection } from '../Socket/Socket';
import { CircularProgress } from '@mui/material';

const Roulette: FC = () => {
   const [newSpin, setNewSpin] = useState(0);
   const [load, setLoad] = useState(true); // Initialize loading state as true
   const [betNotConnected, setBetNotConeccted] = useState(true);
   const [newNumberInner, setNewNumberInner] = useState(null);
   const [newNumberOuter, setNewNumberOuter] = useState(null);
   const [newColorInner, setNewColorInner] = useState(null);
   const [newColorOuter, setNewColorOuter] = useState(null);
   const [pastArray, setPastArray] = useState(null);
   const [pastOuter, setPastOuter] = useState(0);
   const [pastInner, setPastInner] = useState(0);

   useEffect(() => {
    setLoad(true); // Show loading initially

    if (!socketConection.connected) {
      socketConection.connect();
    }

    const handlePastSpins = (data: any) => {
      const lastWin = data[data.length - 1];
      const { numberInner, numberOuter } = lastWin;

      setPastInner(numberInner);
      setPastOuter(numberOuter);

      if (numberInner && numberOuter) {
        if (data) {
          setPastArray(data);
          setBetNotConeccted(false);
        }
      }
    }

    // Set up socket listeners
    const handleBetResults = (data: any) => {
      const { numberInner, numberOuter, colorInner, colorOuter, wins } = data;


      setNewNumberInner(numberInner);
      setNewNumberOuter(numberOuter);
      setNewColorInner(colorInner);
      setNewColorOuter(colorOuter);
    };

    const handleTimeUntilSpin = (data: any) => {
      setLoad(false);
      setNewSpin(data); 
    };

    socketConection.on('time until spin', handleTimeUntilSpin);
    socketConection.on('bet results', handleBetResults);
    socketConection.on('past Spins', handlePastSpins);

    // Cleanup listeners on unmount
    return () => {
      socketConection.off('bet results', handleBetResults);
      socketConection.off('time until spin', handleTimeUntilSpin);
      socketConection.off('past Spins', handlePastSpins);
      socketConection.disconnect();
    };
  }, []);

  useEffect(() => {
  }, [pastArray]);

   return (
    <>
       {load || betNotConnected ? (
        <div className='h-screen w-screen flex justify-center items-center'>
          <CircularProgress />
        </div>
       ) : (
        <>
          <TopBar />
          <LivePlayerBar />
          <div className='backgroundRoulette flex'>
            <div className='h-full flex justify-center items-center p-10 px-5' style={{ width: "87%" }}>
              <div className='flex justify-center h-full' style={{ width: "42%" }}>
                <PlaceBets />
              </div>
              <div className='pt-4 flex-col flex' style={{ width: "58%", height: "100%" }}>
                <div className='flex pl-24'>
                  <RouletteWheel 
                    currentTimer={newSpin} 
                    newInner={newNumberInner} 
                    newOuter={newNumberOuter} 
                    newInnerColor={newColorInner}
                    newOuterColor={newColorOuter}
                    pastInner={pastInner} 
                    pastOuter={pastOuter}
                  />
                  <RouletteDetails />
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                  <LastColors initialArray={pastArray}/>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center h-full pb-3' style={{ width: "13%" }}>
              <LiveChat />
            </div>
          </div>
        </>
       )}
     </>
   );
}

export default Roulette;
