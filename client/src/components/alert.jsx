import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

function Alert({ data, open, setOpen }) {
const navigate = useNavigate();

const handleClose = () => {
setOpen(false);
};

const handleMove = () => {
if (window.location.pathname === '/') {
console.log('Already on Main page');
} else {
navigate('/');
}
};

return (
<Dialog
   open={open}
   onClose={handleClose}
   aria-describedby="alert-dialog-slide-description"
 >
<DialogTitle>{"Check Branches?"}</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-slide-description">
The system was turned to OFFLINE mode for {data.CMS_STATUS.OFFLINE} devices
</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleClose}>Close</Button>
{window.location.pathname !== '/' && (
<Button onClick={handleMove}>Dashboard</Button>
)}
</DialogActions>
</Dialog>
);
}

export default Alert;