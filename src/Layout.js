// Layout.js

import React from 'react';
import Chatbot from './Chatbot'; // Import your Chatbot component
import { BrowserRouter as Router } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Render Chatbot component */}
        <Chatbot />
        {/* Render main content */}
        {children}
      </div>
    </Router>
  );
};

export default Layout;
