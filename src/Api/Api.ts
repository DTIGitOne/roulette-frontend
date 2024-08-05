import axios from "axios";
import axiosInstance from "./axios"

export const getWheelSpin = async (token:any) => {
   try {
      const config = token ? {
         headers: {
            'authorization': `Bearer ${token}`,
         }
      } : {};

      const response = await axiosInstance.get("/spinWheel", config);
      return response.data;
   } catch (e) {
      console.log(e);
   }
}

export const loginUser = async (username: string, password: string) => {
   try {
      const response = await axiosInstance.post("/userLogin", {
         username: username,
         password: password,
      });
      
      return response;
   } catch (e) {
      console.log(e);
      throw e;
   }
}

export const SignupUser = async (username: string,firstname: String,surname: String,email: String, password: string,birthday: Date ) => {
   try {
      const response = await axiosInstance.post("/userSignup", {
         username: username,
         firstname: firstname,
         surname: surname,
         email: email,
         password: password,
         birthday: birthday
      });
      
      return response;
   } catch (e) {
      console.log(e);
      throw e;
   }
}


