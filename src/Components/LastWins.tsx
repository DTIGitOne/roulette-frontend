import { FC, useEffect, useState } from "react";
import "../CSS/LastWins.css";
import { HistoryItem, RouletteHistory } from "../Interface/Interface";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { replaceColor } from "../Functions/Functions";

const LastColors:FC<RouletteHistory> = ({initialArray}) => {
    const [historyArray, setHistoryArray] = useState<HistoryItem[]>(initialArray?.slice(-20) || []);

    const newHistoryVar = useSelector((state: RootState) => state.newHistory);

    useEffect(() => {
        // Update state correctly
        setHistoryArray(initialArray?.slice(-20) || []);
        console.log(historyArray);
      }, [initialArray]);

    /*
    useEffect(() => {
        setHistoryArray((prevArray) => [...prevArray, newHistoryVar]);
        console.log(newHistoryVar);
        console.log(historyArray);
    }, [newHistoryVar]);
    
    useEffect(() => {
        setHistoryArray(historyArray.push(newHistoryVar));
    }, newHistoryVar)
    */
    return (
      <div className=" flex flex-col w-full h-full items-center">
       <h1 className=" text-4xl text-white text-center">Last Wins</h1>
       <div id="colorBox">
        <div className="lastWinsBox">
           {historyArray?.map((item, index) => (
            <div key={index} className="lastWins">
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