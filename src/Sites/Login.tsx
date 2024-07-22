import { FC, useState } from 'react';
import '../CSS/Login.css';
import NeonName from '../SVG/NeonName';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginUser } from '../Api/Api';

const LoginPage: FC = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const sendData = async () => {
     try {
       const response = await loginUser(username, password);
       console.log(response);
     } catch(e) {
      console.log(e);
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
                  <div id='passwordBox' className="form-group">
                     <button type="submit">Login</button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default LoginPage;
