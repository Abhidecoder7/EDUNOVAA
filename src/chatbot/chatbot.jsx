import React, { useState, useEffect } from 'react';
import { FaCommentAlt } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Load chatbot script when component mounts
    const script = document.createElement('script');
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '661199f06a2963a2d48c4486' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Chatbot Icon */}
      

      {/* Chatbot */}
      <div
        className="chatbot"
        style={{
          position: 'fixed',
          bottom: '0',
          right: isOpen ? '0' : '-300px', // Slide in and out from the right
          width: '300px',
          height: '400px',
          backgroundColor: '#f4f4f4',
          borderLeft: '1px solid #ccc',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          transition: 'right 0.3s ease-in-out', // Smooth transition
          zIndex: '9999', // Ensure it's above other content
        }}
      >
        {/* Chatbot UI goes here */}
        <div>
          <h3>Chatbot</h3>
          <div className="chat-messages"></div>
          <input type="text" placeholder="Type a message..." />
        </div>
        {/* Close button */}
        <button onClick={toggleChatbot} style={{ position: 'absolute', top: '10px', right: '10px' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
