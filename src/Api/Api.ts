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
         name: username,
         password: password,
      });
      
      return response.data;
   } catch (e) {
      console.log(e);
      throw e;
   }
}

