import React, { FC, useRef, useState, useEffect } from "react";
import "../CSS/LivePlayerBar.css";
import { io } from "socket.io-client";
import { serverURL } from "../Api/axios";

const MessagesBox: FC = () => {
  const socket = useRef(io(serverURL)).current;
  const [input, setInput] = useState("");
  const messages = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleMessage = (msg: string) => {
      if (messages.current) {
        const item = document.createElement('li');
        item.textContent = msg;
        messages.current.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      }
    };

    socket.on('chat message', handleMessage);

    return () => {
      socket.off('chat message', handleMessage);
    };
  }, [socket]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      socket.emit('chat message', input);
      setInput("");
    }
  };

  return (
    <div>
      <ul ref={messages} id="messages"></ul>
      <form onSubmit={handleSubmit} id="form" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="input"
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default MessagesBox;
