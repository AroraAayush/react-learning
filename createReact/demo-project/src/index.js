import React from 'react';
import ReactDOM from 'react-dom/client';

import Greeting from './Greeting';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    <Greeting/>    </>
    
  </React.StrictMode>
);
