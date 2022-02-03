import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import FileRoutes from './routes';

render(
  <StrictMode>
    <BrowserRouter>
      <FileRoutes />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
