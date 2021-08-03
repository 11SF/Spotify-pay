import React from "react";
import { Route } from "react-router-dom";

import Home from './views/Home'
import LoginBox from './views/Login'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  return (
    <div className="App">
      <Route path="/" exact><Home /></Route>
      <Route path="/login"><LoginBox /></Route>
    </div>
  );
}

export default App;
