import { FC, useEffect, useState } from "react";
import "../CSS/LastWins.css";
import { HistoryItem, RouletteHistory } from "../Interface/Interface";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { replaceColor } from "../Functions/Functions";

const LastColors:FC<RouletteHistory> = ({initialArray}) => {
    const [historyArray, setHistoryArray] = useState<HistoryItem[]>(
        initialArray?.slice(-20) || []
      );
    
      const newHistoryVar: any = useSelector(
        (state: RootState) => state.newHistory
      );

      useEffect(() => {
        console.log(historyArray);
      }, []);
    
      // Debug effect to log changes
      useEffect(() => {
        console.log("History Array Updated: ", historyArray);
      }, [historyArray]);
    
      useEffect(() => {
        if (newHistoryVar.historyArray) {
          // Ensure the new item(s) are added correctly
          setHistoryArray((prevArray) => {
            // Check if newHistoryVar.historyArray is an array
            const newItems = Array.isArray(newHistoryVar.historyArray)
              ? newHistoryVar.historyArray
              : [newHistoryVar.historyArray]; // Make sure it's treated as an array
            
            const updatedArray = [...prevArray, ...newItems]; // Spread the new items
            
            // Keep only the last 20 items
            return updatedArray.slice(-20);
          });
        }
      }, [newHistoryVar]);

    return (
      <div className=" flex flex-col w-full h-full items-center">
       <h1 className=" text-4xl text-white text-center">Last Wins</h1>
       <div id="colorBox">
        <div className="lastWinsBox transition-all">
           {historyArray?.map((item, index) => (
            <div key={index} className="lastWins transition-all">
               <div className=" h-1/2 w-full rounded-tr-2xl rounded-tl-2xl" style={{backgroundColor: replaceColor(item.colorOuter)}}></div>
               <div className=" h-1/2 w-full rounded-br-2xl rounded-bl-2xl" style={{backgroundColor: replaceColor(item.colorInner)}}></div>
            </div>
           ))};
        </div>
       </div>
      </div>
    );
}

export default LastColors;