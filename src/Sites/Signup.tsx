import { FC, useState } from 'react';
import '../CSS/Login.css';
import NeonName from '../SVG/NeonName';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginUser } from '../Api/Api';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../CSS/Signup.css';
import SignDate from '../Components/SignDate';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { DateDataState } from '../Interface/Interface';

const SignupPage:FC = () => {

   const dateData = useSelector<RootState, DateDataState>((state) => state.dateData as DateDataState);

   const daySel = dateData?.day;
   const monthSel = dateData?.month;
   const yearSel = dateData?.year;

   const [name, setName] = useState("");
   const [surname, setSurname] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [repeatPassword, setRepeatPasssword] = useState("");
   const [email, setEmail] = useState("");

   const [nameError, setNameError] = useState("");
   const [surnameError, setSurnameError] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [repeatPasswordError, setRepeatPassswordError] = useState("");
   const [birthYearError, setBirthYearError] = useState("");

   const [showPassword, setShowPassword] = useState(false);
   const [showRepeatPassword, setShowRepeatPassword] = useState(false);
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
      if (!monthSel || !daySel || !yearSel) {
         setBirthYearError("Birthyear is missing");
      } else {
         setBirthYearError("");
      }
      if (username && password) {
         sendData();
      }

   };

   const handleName = (e: string) => {
      setName(e);
      setNameError("");
   }

   const handleSurname = (e: string) => {
      setSurname(e);
      setSurnameError("");
   }

   const handleUsername = (e: string) => {
      setUsername(e);
      setUsernameError("");
   }
   const handleEmail = (e: string) => {
      setEmail(e);
      setEmailError("");
   }

   const handlePassword = (e: string) => {
      setPassword(e);
      setPasswordError("");
   }

   const handleRepeatPassword = (e: string) => {
      setRepeatPasssword(e);
      setRepeatPassswordError("");
   }

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   }

   const toggleShowRepeatPassword = () => {
      setShowRepeatPassword(!showRepeatPassword);
   }

   return (
      <>
         <div className='background22 flex'>
            <div className='h-full w-full flex flex-col justify-center items-center'>
               <NeonName nameHeight={270} nameWidth={270} />
               <form id='SignupForm' action="/login" method="POST" onSubmit={handleSubmit}>
                  <div className=' flex gap-7'>
                  <div className="form-group">
                     <input onChange={(e) => handleName(e.target.value)} value={name} type="text" id="username" placeholder='Name' />
                     <div className='passwordErrorBox'>{nameError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handleSurname(e.target.value)} value={surname} type="text" id="username" placeholder='Surname' />
                     <div className='passwordErrorBox'>{surnameError}</div>
                  </div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handleUsername(e.target.value)} value={username} type="text" id="username" placeholder='Username' />
                     <div className='passwordErrorBox'>{usernameError}</div>
                  </div>
                  <div className=" relative flex flex-col">
                   <SignDate />
                   <div className='passwordErrorBox'>{birthYearError}</div>
                  </div>
                  <div className="form-group mt-2">
                     <input onChange={(e) => handleEmail(e.target.value)} value={email} type="text" id="email" placeholder='email@example.com' />
                     <div className='passwordErrorBox'>{emailError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handlePassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} id="password" placeholder='Password' />
                     <button className='showPasswordButton' type="button" onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                     </button>
                     <div className='passwordErrorBox'>{passwordError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handleRepeatPassword(e.target.value)} value={repeatPassword} type={showRepeatPassword ? "text" : "password"} id="passwordRepeat" placeholder='(Repeat) Password' />
                     <button className='showPasswordButton' type="button" onClick={toggleShowRepeatPassword}>
                        {showRepeatPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                     </button>
                     <div className='passwordErrorBox'>{repeatPasswordError}</div>
                  </div>
                  <div id='passwordBox' className="form-group container2">
                     {loading ? <CircularProgress /> : <button className='btn' type="submit"><p>Sign up</p></button>}
                  </div>
               </form>
               <span className='text-white mt-3 flex' style={{fontSize: "18px"}}>
                  <span className=' select-none'>Already have an account?</span>
                  <button id='LoginButton' onClick={() => navigate('/Login')} className=' ml-2'>Login</button>
               </span>
            </div>
         </div>
      </>
   );
}

export default SignupPage;