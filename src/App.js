import React,{ useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./services/firebase";

import Home from './views/Home'
import LoginBox from './views/Login'
import Admin from './views/Admin'

import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  const [user, setUser] = useState(null);

  // const isAuth = () => {
  //   if(sessionStorage.getItem("session"))
  //     return <Admin />
  //   else
  //     return <Redirect to="/login"></Redirect>
  // }
  useEffect(()=> {
    // if(sessionStorage.getItem("session"))
    //   setIsAuth(sessionStorage.getItem("session"))

    auth.onAuthStateChanged( user => {
      setUser(user)
      // console.log(user);
    })
  },[])

  return (
    <div className="App">
      <Route path="/" exact><Home user={user} /></Route>
      <Route path="/login">
        {user ? <Redirect to="/admin"></Redirect> : <LoginBox />}
        <LoginBox /></Route>
      <Route path="/admin">
        {user ? <Admin /> : <Redirect to="/login"></Redirect>}
      </Route>
    </div>
  );
}

export default App;
