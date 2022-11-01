import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContextProvider from './context/AppContext';
import App from './App';
import './assets/scss/index.scss';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  // </React.StrictMode>
);
