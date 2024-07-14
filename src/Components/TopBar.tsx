import { FC } from "react";
import "../CSS/TopBar.css";

const TopBar:FC = () => {
   return (
      <div className="topBarBox flex items-center justify-between select-none">
        <div className="menuLeft">
          <div className="btn cursor-pointer"><p>Games</p></div>
          <div className="btn cursor-pointer"><p>Withdraw</p></div>
          <div className="btn cursor-pointer"><p>Deposit</p></div>
        </div>
        <div className="container">
          <div className="btn cursor-pointer"><p>Log In</p></div>
      </div>
      </div>
   );
}

export default TopBar;