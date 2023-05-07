import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { GridMovies } from './components/Component';
import { NavBar } from './components/NavBar';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar/>
    <GridMovies />
  </React.StrictMode>
);

// reportWebVitals();
