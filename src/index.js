import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GoogleAuthProvider } from './googleAuth';

ReactDOM.render(
    <GoogleAuthProvider>
      <App />
    </GoogleAuthProvider>,
  document.getElementById('root')
);