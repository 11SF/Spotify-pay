import React,{ useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import Home from './views/Home'
import LoginBox from './views/Login'
import Admin from './views/Admin'

import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  const [isAuth, setIsAuth] = useState(null);

  // const isAuth = () => {
  //   if(sessionStorage.getItem("session"))
  //     return <Admin />
  //   else
  //     return <Redirect to="/login"></Redirect>
  // }
  useEffect(()=> {
    if(sessionStorage.getItem("session"))
      setIsAuth(sessionStorage.getItem("session"))
  },[])
  return (
    <div className="App">
      <Route path="/" exact><Home isAuth={isAuth} /></Route>
      <Route path="/login">
        {isAuth ? <Redirect to="/admin" setIsAuth={setIsAuth}></Redirect> : <LoginBox />}
        <LoginBox /></Route>
      <Route path="/admin">
        {isAuth ? <Admin setIsAuth={setIsAuth} /> : <Redirect to="/login"></Redirect>}
      </Route>
    </div>
  );
}

export default App;
