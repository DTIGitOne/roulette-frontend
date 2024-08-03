import { FC, useState } from 'react';
import '../CSS/Login.css';
import NeonName from '../SVG/NeonName';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginUser } from '../Api/Api';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const sendData = async () => {
     setLoading(true);
     try {
       const response = await loginUser(username, password);
       console.log(response);
     } catch(e) {
       console.log(e);
     } finally {
       setLoading(false);
     }
   }

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!username) {
         setUsernameError("Username is missing");
      }
      if (!password) {
         setPasswordError("Password is missing");
      }
      if (username && password) {
         sendData();
      }
   };

   const handleUsername = (e: string) => {
      setUsername(e);
      setUsernameError("");
   }

   const handlePassword = (e: string) => {
      setPassword(e);
      setPasswordError("");
   }

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   }

   return (
      <>
         <div className='background11'></div>
         <div className='background2 flex'>
            <div className='h-full w-full flex flex-col justify-center items-center'>
               <NeonName nameHeight={270} nameWidth={270} />
               <form id='loginForm' action="/login" method="POST" onSubmit={handleSubmit}>
                  <div className="form-group">
                     <input onChange={(e) => handleUsername(e.target.value)} value={username} type="text" id="username" placeholder='Username' name="username" />
                     <div className='passwordErrorBox'>{usernameError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handlePassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} id="password" placeholder='Password' name="password" />
                     <button className='showPasswordButton' type="button" onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                     </button>
                     <div className='passwordErrorBox'>{passwordError}</div>
                  </div>
                  <div id='passwordBox' className=" container2 form-group">
                     {loading ? <CircularProgress /> : <button className='btn' type="submit"><p>Login</p></button>}
                  </div>
               </form>
               <span className=' text-white mt-3 flex' style={{fontSize: "18px"}}>
                  <span className=' select-none'>Dont have an account?</span>
                  <button id='signUpButton' onClick={() => navigate('/Signup')} className=' ml-2 '>Sign up</button>
               </span>
            </div>
         </div>
      </>
   );
}

export default LoginPage;
