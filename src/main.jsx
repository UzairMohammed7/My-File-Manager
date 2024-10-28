import { BrowserRouter } from 'react-router-dom';
import React from 'react';  // Import React as best practice
import { createRoot } from 'react-dom/client';  // React 18's new root API
import './index.css';  // Import global CSS including Tailwind
import App from './App.jsx';  // Import main App component

// Create a root element to enable concurrent rendering
const container = document.getElementById('root');
const root = createRoot(container);  // Create root

// Render the app within StrictMode for development checks
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
