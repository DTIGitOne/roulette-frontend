import { FC } from "react";
import "../CSS/TopBar.css";
import { useNavigate } from "react-router-dom";

const TopBar:FC = () => {
   
   const navigate = useNavigate();

   const loginPage = () => {
     navigate('/Login');
   }

   return (
      <div className="topBarBox flex items-center justify-between select-none">
        <div className="menuLeft">
          <div className="btn cursor-pointer"><p>Games</p></div>
          <div className="btn cursor-pointer"><p>Withdraw</p></div>
          <div className="btn cursor-pointer"><p>Deposit</p></div>
        </div>
        <div className="container">
          <button onClick={loginPage} className="btn cursor-pointer"><p>Log In</p></button>
      </div>
      </div>
   );
}

export default TopBar;