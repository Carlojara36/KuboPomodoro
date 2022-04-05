import logo from './logo.svg';
import './App.css';
import { useNavigate} from 'react-router-dom';
import {render} from 'react-dom'
import React from 'react';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Sidebar from './components/Sidebar';



function App() {
  render(<Login />, document.getElementById('root'));

}

export default App;
