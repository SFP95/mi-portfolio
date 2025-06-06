import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Asegura que el body tenga la clase loaded
document.body.classList.add('loaded');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);