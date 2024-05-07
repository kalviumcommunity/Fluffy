import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

// Use createRoot to render the app
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
