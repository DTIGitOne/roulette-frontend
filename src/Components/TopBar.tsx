import { FC, useEffect, useRef, useState } from "react";
import "../CSS/TopBar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { setTimeout } from "timers/promises";

const TopBar:FC = () => {
   const [loggedUser, setLoggedUser] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
   const [username, setUsername] = useState("DzimyJayaaaaaaaa");
   const menuRef = useRef<HTMLDivElement>(null);
   
   const navigate = useNavigate();

   const location = useLocation();
   const currentPath = location.pathname;

   const fakeId = "DzyimasDzejas";

   const loginPage = () => {
     navigate('/Login');
   }

   const userProfile = () => {
     navigate(`/Profile/${fakeId}`);
   }

   const navDeposit = () => {
    if (currentPath !== "/Deposit") {
      navigate("/Deposit");
    }
   }

   const navRoulette = () => {
    if (currentPath !== "/Roulette") {
      navigate("/Roulette");
    }
   }

   const navWithdraw = () => {
    if (currentPath !== "/Withdraw") {
      navigate("/Withdraw");
    }
   }

   useEffect(() => {
    const menu = menuRef.current;

    if (menu) {
       if (menuOpen) {
         menu.style.animationName = "open";
       } 
      }
   }, [menuOpen]);

   return (
      <>
      <div className="topBarBox flex items-center justify-between select-none">
        <div className="menuLeft">
          <div onMouseOver={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} className="btn cursor-pointer"><p>Games</p></div>
          <div onClick={navWithdraw} className="btn cursor-pointer"><p>Withdraw</p></div>
          <div onClick={navDeposit} className="btn cursor-pointer"><p>Deposit</p></div>
        </div>
          {loggedUser ? (
            <button onClick={userProfile} className="profileDetailsBox">
              <div>
                <div id="profilePictureBox">
                  <img src="https://archive.org/download/discordprofilepictures/discordgreen.png" id="profilePicture" alt="" />
                </div>
              </div>
              <div className=" p-2 pr-7 pl-3 flex flex-col items-start">
               <p className=" text-white">{username}</p>
               <span className=" pl-1 pt-1">0.00</span>
              </div>
            </button>
          ) : (
            <div className="container">
              <button onClick={loginPage} className="btn cursor-pointer"><p>Log In</p></button>
            </div>
          )}
      </div>
      {menuOpen ? (
       <div onMouseOver={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} ref={menuRef} className="menu absolute w-full flex" style={{top: "8vh",backgroundColor: "#06fa8a"}}>
        <button onClick={navRoulette} className="menuButton">Roulette</button>
       </div>
      ) : (
        <div></div>
      )}
      </>
   );
}

export default TopBar;