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