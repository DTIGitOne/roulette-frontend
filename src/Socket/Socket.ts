import { io } from 'socket.io-client';

const token1 = localStorage.getItem("token");

const URL = process.env.REACT_APP_SOCKET_URL || "http://178.77.1.150:8080";
export const socketConection = io(URL, {
    autoConnect: false,
    reconnectionAttempts: 5,
    transports: ['websocket'],
    auth: {
        token: `${token1}`,
    }
});
