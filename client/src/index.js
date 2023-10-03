import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import IconClose from '@mui/icons-material/Close';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <SnackbarProvider maxSnack={10} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey}/>}>
      <App />
    </SnackbarProvider>


  </>
);

function SnackbarCloseButton({ snackbarKey }) {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <IconClose />
    </IconButton>
  );
}