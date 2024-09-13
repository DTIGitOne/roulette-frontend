import { FC } from "react";
import TopBar from "../Components/TopBar";
import { useNavigate } from "react-router-dom";
import NeonIcon from "../SVG/NeonSpin";

const DepositPage:FC = () => {

    const navigate = useNavigate();

    return (
        <div>
            <TopBar />
            <div id="widhdrawDivBox" className=' w-full flex flex-col justify-center items-center p-10 px-5'>
                 <p className=" text-center text-white text-xl select-none" style={{height: "10%"}}>
                    Please remember that this is not a real betting website!
                    <br />
                    All of the currency deposited is fake
                 </p>
                 <div className=" w-3/5" style={{height: "90%"}}>
                    <div className=" p-24 h-full w-full flex flex-col gap-16 items-center">
                     <div className=" w-full flex justify-center items-center items-center flex-col">
                      <h2 className=" text-7xl font-thin select-none" style={{color: "#06fa8a"}}>Deposit</h2>
                      <div className="divLineWith"></div>
                     </div>
                     <div className=" flex gap-28">
                     <div className="group relative">
                     <button onClick={() => navigate("/CardDepositPage")}>
                     <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-white w-32 hover:scale-125 duration-200 hover:stroke-green-400">
                      <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"/>
                      <path d="M10 16H6"/>
                      <path d="M14 16H12.5"/>
                      <path d="M2 10L22 10"/>
                     </svg>
                     </button>
                     <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100">Card<span> 
                     </span></span>
                     </div>
                     <div className="group relative">
                     <button disabled>
                     <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-white w-32 hover:scale-125 duration-200 hover:stroke-gray-700">
                      <path d="M10 6V4M14 6V4M14 6H7M14 6C15.6569 6 17 7.34315 17 9C17 10.6569 15.6569 12 14 12M9 18L9 12M9 6V12M10 20V18M14 20V18M9 12H15C16.6569 12 18 13.3431 18 15C18 16.6569 16.6569 18 15 18H7" />
                     </svg>
                     </button>
                     <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100">Crypto<span> 
                     </span></span>
                     </div>
                     <div className="group relative">
                     <button disabled>
                     <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-white w-32 hover:scale-125 duration-200 hover:stroke-gray-700">
                     <path d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M12 7.00695L12.0074 7.00022M21 10.0001L14.126 3.88986C13.3737 3.2212 12.9976 2.88688 12.5732 2.75991C12.1992 2.64806 11.8008 2.64806 11.4268 2.75991C11.0024 2.88688 10.6263 3.2212 9.87404 3.88986L3 10.0001H21Z" />
                     </svg>
                     </button>
                     <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100">Bank<span>
                     </span></span>
                     </div>
                     </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default DepositPage;