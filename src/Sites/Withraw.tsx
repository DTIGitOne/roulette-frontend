import { FC } from "react";
import TopBar from "../Components/TopBar";
import '../CSS/WithdrawDeposit.css';
import { useNavigate } from "react-router-dom";

const WithdrawPage:FC = () => {

    const navigate = useNavigate();

    return (
        <div>
            <TopBar />
            <div id="widhdrawDivBox" className=' w-full flex flex-col justify-center items-center p-10 px-5'>
                 <p className=" text-center text-white text-xl select-none" style={{height: "10%"}}>
                    Please remember that this is not a real betting website!
                    <br />
                    All of the currency withdrawn is only for display
                 </p>
                 <div className=" w-3/5" style={{height: "90%"}}>
                    <div className=" p-24 h-full w-full flex flex-col gap-16 items-center">
                     <div className=" w-full flex justify-center items-center items-center flex-col">
                      <h2 className=" text-7xl font-thin select-none" style={{color: "#06fa8a"}}>Withdraw</h2>
                      <div className="divLineWith"></div>   
                     </div>
                     <button onClick={() => navigate("/WithdrawEmailPage")} className="animated-button">
                      <svg className="arr-2" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                       <path stroke="#1f387e" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/>
                      </svg>
                      <span className="text">Withdraw through email</span>
                      <span className="circle"></span>
                      <svg className="arr-1" fill="#1f387e" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 490.2 490.2" >
                       <g>
	                    <g>
		                 <path d="M368.4,245.1c0,12.9-10.5,23.4-23.4,23.4s-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4S368.4,232.2,368.4,245.1z M76.1,245.1
		                  c0,12.9,10.5,23.4,23.4,23.4s23.4-10.5,23.4-23.4s-10.5-23.4-23.4-23.4S76.1,232.2,76.1,245.1z M38.5,382.7h268v-32.9H78.1
			              c0.4-2.3,0.7-4.7,0.7-7.2c0-21.5-17.5-39-39-39c-2.3,0-4.6,0.2-6.8,0.6V185.9c2.2,0.4,4.5,0.6,6.8,0.6c21.5,0,39-17.5,39-39
			              c0-2.5-0.2-4.8-0.7-7.2h286.1c-0.8,3-1.2,6.2-1.2,9.5c0,21.5,17.5,39,39,39c3.3,0,6.6-0.4,9.6-1.2v79.9h32.9V146
			              c0-21.2-17.3-38.5-38.5-38.5H38.5C17.3,107.5,0,124.8,0,146v198.2C0,365.4,17.3,382.7,38.5,382.7z M321.6,355.1
			              c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118c2.7,0,4.9-2.2,4.9-4.9V360c0-2.7-2.2-4.9-4.9-4.9H321.6z M467.4,339.1
			              v-17.8c0-2.7-2.2-4.9-4.9-4.9h-118c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118C465.2,344,467.4,341.8,467.4,339.1z
			              M485.3,277.7h-118c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118c2.7,0,4.9-2.2,4.9-4.9v-17.8
			              C490.2,279.9,488,277.7,485.3,277.7z M222.3,160.7c46.6,0,84.4,37.8,84.4,84.4s-37.8,84.4-84.4,84.4s-84.4-37.8-84.4-84.4
			              S175.6,160.7,222.3,160.7z M229.7,182.4h-9.6c-1.5,0-2.6,1.2-2.6,2.6v11.5c-7.3,1.1-13.3,3.7-17.8,8.1c-5,4.8-7.5,10.9-7.5,18.4
			              c0,8.2,2.4,14.5,7.1,18.7c4.7,4.2,12.3,8.4,22.6,12.6c4.3,1.8,7.2,3.7,8.9,5.6c1.7,1.9,2.5,4.6,2.5,8.1c0,3-0.8,5.4-2.4,7.3
			              c-1.6,1.8-4,2.8-7.2,2.8c-3.8,0-6.9-1.2-9.2-3.6c-1.9-2-3.1-5-3.4-9c-0.1-1.6-1.5-2.8-3.1-2.7l-15.8,0.3c-1.7,0-3.1,1.5-3.1,3.2
			              c0.4,8.4,3.1,14.8,8.1,19.4c5.4,4.9,12.2,7.9,20.3,8.8v10.8c0,1.5,1.2,2.6,2.6,2.6h9.6c1.5,0,2.6-1.2,2.6-2.6v-11.2
			              c6.5-1.2,11.8-3.8,15.9-7.7c4.8-4.7,7.2-10.8,7.2-18.5c0-8-2.4-14.2-7.2-18.6c-4.8-4.3-12.3-8.7-22.5-13c-4.4-1.9-7.4-3.8-9-5.7
			              s-2.4-4.4-2.4-7.4s0.7-5.4,2.2-7.4c1.5-1.9,3.8-2.9,6.9-2.9c3.1,0,5.5,1.2,7.4,3.5c1.5,1.9,2.4,4.5,2.7,8c0.1,1.6,1.6,2.7,3.1,2.7
			              l15.8-0.2c1.7,0,3.2-1.5,3.1-3.2c-0.4-6.9-2.6-12.7-6.7-17.4c-4.2-4.9-9.7-8-16.6-9.4V185C232.3,183.5,231.1,182.4,229.7,182.4z"
			             />
	                    </g>
                       </g>
                      </svg>
                     </button>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default WithdrawPage;