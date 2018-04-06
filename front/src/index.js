import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './pages/app/App';


ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));
