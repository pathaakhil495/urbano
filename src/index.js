import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './header.css'
import './home.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';

import App from './App';


createRoot(document.getElementById('root')).render(<App />);
