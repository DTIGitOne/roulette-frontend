import axios from "axios";

export const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

const axiosInstance = axios.create({
   baseURL: serverURL,
   headers: {
      'Content-Type': 'application/json',
    },
});

export default axiosInstance;