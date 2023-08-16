import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <SnackbarProvider maxSnack={10}>
      <App />
    </SnackbarProvider>


  </>
);