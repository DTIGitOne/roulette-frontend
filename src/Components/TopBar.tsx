import { FC, useState } from "react";
import "../CSS/TopBar.css";
import { useNavigate } from "react-router-dom";

const TopBar:FC = () => {
   const [loggedUser, setLoggedUser] = useState(true);
   const [username, setUsername] = useState("DzimyJayaaaaaaaa");
   
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
          {loggedUser ? (
            <div className="profileDetailsBox">
              <div>
                <div id="profilePictureBox">
                  <img src="https://archive.org/download/discordprofilepictures/discordgreen.png" id="profilePicture" alt="" />
                </div>
              </div>
              <div className=" p-2 pr-7 pl-3">
               <p className=" text-white">{username}</p>
               <span>0.00</span>
              </div>
            </div>
          ) : (
            <div className="container">
              <button onClick={loginPage} className="btn cursor-pointer"><p>Log In</p></button>
            </div>
          )}
      </div>
   );
}

export default TopBar;