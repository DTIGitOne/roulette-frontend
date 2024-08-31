import { FC } from "react";
import "../CSS/PlaceBets.css";

const PlaceBets:FC = () => {
   return (
      <div className=" flex flex-col gap-7" style={{width: "95%"}}>
         <div className=" w-full flex justify-center items-center h-1/2">
          <span id="betsBox"></span>
         </div>
         <div className=" w-full flex gap-2 h-1/2">
            <div className=" w-3/12">
             <div className="betsPlacedSegments" style={{backgroundColor: "#000000"}}>1.2x</div>
            </div>
            <div className=" w-3/12">
             <div className="betsPlacedSegments" style={{backgroundColor: "rgba(208, 250, 255, 0.75)"}}>1.6x</div>
            </div>
            <div className=" w-3/12">
             <div className="betsPlacedSegments" style={{backgroundColor: "#31bfff"}}>3x</div>
            </div>
            <div className=" w-3/12">
             <div className="betsPlacedSegments" style={{backgroundColor: "#05e77e"}}>16x</div>
            </div>
         </div>
      </div>
   );
}

export default PlaceBets;