import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Calce from './calculator';
import Header from './components/header';
import Footer from './components/footer';
//import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Calce />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
