import React,{ useState, useEffect } from "react";

import './App.css'
import Header from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Payment from './components/Payment/Payment'

import loading_icon from './asset/bars.svg'


function App() {
  const [memberData, setMemberData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);
    let res = await fetch('https://mysitebackend.herokuapp.com/api/member/get/all');
    res = await res.json();
    setLoading(false);
    setMemberData(res);
  }

  useEffect(() => fetchData(),[]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          {loading ? 
            <img className="loading" src={loading_icon} alt="loading_bar" /> 
            : memberData.map(user => (<Card key={user._id} className="card" name={user.name} 
              pic={user.img_src} lastDate={user.lastDate} expireDate={user.expireDate} />)) }
        </div>
        <div className="bottom_wave"></div>
        <Payment />
      </main>
      <footer className="footer">11SF</footer>
    </div>
  );
}

export default App;
