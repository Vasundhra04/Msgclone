import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userProfile, setUserProfile] = useState({
    name: username || 'Your Name', // Use the passed username or default to 'Your Name'
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLlJS2C2KD-fRoOykz8e5luqOtFFpGo_QQ&usqp=CAU',
  });

  useEffect(() => {
    // Use effect to update the username when it changes
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: username,
    }));
  }, [username]);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      setMessages([{ text: messageInput, user: userProfile.name }, ...messages]);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-body1">
      <div className="chat-container1">
        {/* Navbar with Profile Photo and Name */}
        <div className="navbar">
          <div className="profile-container1">
            <img
              src={userProfile.profilePhoto}
              alt="Profile"
              className="profile-photo"
            />
            <p className="profile-name">{userProfile.name}</p>
          </div>
          <p className="navbar-text">Chat Room</p>
        </div>

        <div className="message-container1">
          {messages.map((msg, index) => (
            <div key={index} className="message-wrapper">
              <strong className="message-text">{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className="input-container1">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">
            {/* Add an icon or text inside the button if needed */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;