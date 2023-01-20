import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

import FileRoutes from './routes';

render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <FileRoutes />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
