import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
     <CssBaseline />
    <App />
    </React.Fragment>
  </React.StrictMode>
);


