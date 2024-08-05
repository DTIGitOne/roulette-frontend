import { FC, useState } from 'react';
import '../CSS/Login.css';
import NeonName from '../SVG/NeonName';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginUser, SignupUser } from '../Api/Api';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../CSS/Signup.css';
import SignDate from '../Components/SignDate';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { DateDataState } from '../Interface/Interface';
import WavesBackground1 from '../SVG/WavesBackground1';
import { emailRegex, nameRegex, passwordRegex, usernameRegex } from '../Regex/Regex';

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

   const sendData = async (username: string, name: String, surname:String, email: String, password: string, birthday: Date ) => {
     setLoading(true);
     try {
       const response = await SignupUser(username, name, surname, email, password, birthday);

       if (response.status === 400 && response.data.message === "Email already exists") {
          setEmailError("Email already exists")
       } else if (response.status === 400 && response.data.message === "Username already exists") {
          setUsernameError("Username already exists");
       }
       
     } catch(e) {
      const err = e as { response: { status: number, data: { message: string } } };
    
      if (err.response.status === 400 && err.response.data.message === "Email already exists") {
          setEmailError("Email already exists");
      } else if (err.response.status === 400 && err.response.data.message === "Username already exists") {
          setUsernameError("Username already exists");
      }
     } finally {
       setLoading(false);
     }
   }

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!name) {
         setNameError("Name is missing");
      } else if (!nameRegex.test(name)) {
         setNameError("Contains only Letters")
      } else if (name.length > 40) {
         setNameError(`Max Characters 40`);
      }

      if (!surname) {
         setSurnameError("Surname is missing");
      } else if (!nameRegex.test(surname)) {
         setSurnameError("Contains only Letters")
      } else if (surname.length > 40) {
         setSurnameError(`Max Characters 40`);
      }

      if (!username) {
         setUsernameError("Username is missing");
      } else if (username.length < 6) {
         setUsernameError("Min length 6 characters");
      } else if (!usernameRegex.test(username)) {
         setUsernameError("Must contain at least 1 letter");
      } else if (username.length > 16) {
         setUsernameError("Max length 16 characters")
      }

      if (!monthSel || !daySel || !yearSel) {
         setBirthYearError("Birthyear is missing");
      } else {
         setBirthYearError("");
      }

      if (!email) {
         setEmailError("Email is missing");
      } else if (!emailRegex.test(email)) {
         setEmailError("Invalid format");
      }

      if (!password) {
         setPasswordError("Password is missing");
      } else if (password.length < 8) {
         setPasswordError("Min length 8 characters");
      } else if (password.length > 40) {
         setPasswordError("Max length 40 characters");
      } else if (!passwordRegex.test(password)) {
         setPasswordError("Must contain at least 1 special character");
      }


      if (!repeatPassword) {
         setRepeatPassswordError("Field is missing");
      } else if (repeatPassword !== password) {
         setRepeatPassswordError("Password is incorrect");
      }

      let customDate;

      if (name && nameRegex.test(name) && name.length <= 40) {
         if (surname && nameRegex.test(surname) && surname.length <= 40) {
            if (username && username.length >= 6 && username.length <= 16 && usernameRegex.test(username)) {
               if (monthSel && daySel && yearSel) {
                  const year = parseInt(yearSel);
                  const day = parseInt(daySel);
                  const month = parseInt(monthSel);
                  
                  customDate = new Date(year, month - 1, day);

                  if (emailRegex.test(email)) {
                     if (password && password.length >= 8 && password.length <= 40 && passwordRegex.test(password)) {
                        if (repeatPassword === password) {
                           sendData(username, name, surname, email, password, customDate);
                        }
                     } 
                  }
               }
            }
         }
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
         <div className='background22 flex overflow-hidden'>
         <div className='signUpBG1'>
          <WavesBackground1 />
         </div>
            <div className='h-full w-full flex flex-col justify-center items-center'>
               <NeonName nameHeight={280} nameWidth={280} />
               <form id='SignupForm' action="/login" method="POST" onSubmit={handleSubmit}>
                  <div className=' flex gap-7'>
                  <div className="form-group">
                     <input onChange={(e) => handleName(e.target.value)} value={name} type="text" id="name" className=' mClass' placeholder='Name' />
                     <div className='passwordErrorBox'>{nameError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handleSurname(e.target.value)} value={surname} type="text" id="surname" className='mClass' placeholder='Surname' />
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
                     <input onChange={(e) => handleEmail(e.target.value)} value={email} type="text" id="email" className='mClass' placeholder='email@example.com' />
                     <div className='passwordErrorBox'>{emailError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handlePassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} id="password" className='mClass' placeholder='Password' />
                     <button className='showPasswordButton' type="button" onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                     </button>
                     <div className='passwordErrorBox'>{passwordError}</div>
                  </div>
                  <div className="form-group">
                     <input onChange={(e) => handleRepeatPassword(e.target.value)} value={repeatPassword} type={showRepeatPassword ? "text" : "password"} id="passwordRepeat" className='mClass' placeholder='(Repeat) Password' />
                     <button className='showPasswordButton2' type="button" onClick={toggleShowRepeatPassword}>
                        {showRepeatPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                     </button>
                     <div className='passwordErrorBox'>{repeatPasswordError}</div>
                  </div>
                  <div id='passwordBox2' className="form-group container3 mt-3">
                     {loading ? <div className=' w-full flex justify-center items-center'><CircularProgress /></div> : <button className='btn' type="submit"><p>Sign up</p></button>}
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