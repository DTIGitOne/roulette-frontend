import { FC, useEffect, useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import "../CSS/LiveChat.css";
import { socketConection } from "../Socket/Socket";

const LiveChat: FC = () => {
    const [input, setInput] = useState("");
    const messages = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const handleMessage = (msg: string) => {
        if (messages.current) {
          // Create the message container
          const messageDetailsBox = document.createElement('div');
          messageDetailsBox.id = 'messageDetailsBox';

          // Create user picture container
          const userPictureBox = document.createElement('div');
          userPictureBox.id = 'userPictureBox';

          const userPicture = document.createElement('img');
          userPicture.id = 'userPicture';
          userPicture.src = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg';
          userPicture.alt = '';

          userPictureBox.appendChild(userPicture);

          // Create the content container
          const messageContentBox = document.createElement('span');
          messageContentBox.id = 'messageContentBox';

          const messageUsername = document.createElement('div');
          messageUsername.id = 'messageUsername';
          messageUsername.className = 'font-medium mb-2';
          messageUsername.style.fontSize = '15px';
          messageUsername.textContent = 'Dzazmin';  // You can replace this with dynamic username if available

          const messageContent = document.createElement('p');
          messageContent.id = 'messageContent';
          messageContent.className = 'text-white word-wrap';
          messageContent.style.fontSize = '13px';
          messageContent.textContent = msg;

          messageContentBox.appendChild(messageUsername);
          messageContentBox.appendChild(messageContent);

          // Assemble the message details box
          messageDetailsBox.appendChild(userPictureBox);
          messageDetailsBox.appendChild(messageContentBox);

          // Append to messages container
          messages.current.appendChild(messageDetailsBox);

          // Scroll to the bottom
          window.scrollTo(0, document.body.scrollHeight);
        }
      };
  
      socketConection.on('message', handleMessage);
  
      return () => {
        socketConection.off('message', handleMessage);
      };
    }, [socketConection]);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input) {
        socketConection.emit('message', input);
        setInput("");
      }
    };
   
   return (
      <div id="liveChatBox">
        <div id="messagesBox" ref={messages}>
            {/* appended messages box */}
        </div>
        <form onSubmit={handleSubmit} id="messageBox">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="message" type="text" />
            <button type="submit"><SendIcon /></button>
        </form>
      </div>
   );
}

export default LiveChat;
