import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

const rootElement = document.getElementById('root');

// Use createRoot to render the app
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='470155514225-crm0f3irlg2ppshdotighecklv12neae.apps.googleusercontent.com'>   
        <App />  
    </GoogleOAuthProvider>
  </React.StrictMode>
);
