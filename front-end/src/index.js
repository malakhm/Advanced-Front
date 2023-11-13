import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { disablereactdevtools } from '@fvilers/disable-react-devtools';

if (Process.env.NODE_ENV !== 'production') disablereactdevtools ();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


