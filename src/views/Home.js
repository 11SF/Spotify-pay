import React, { useState, useEffect } from 'react'

import Header from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import Payment from '../components/Payment/Payment'

import loading_icon from '../asset/bars.svg'

export default function Home({isAuth}) {

    const [memberData, setMemberData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    async function fetchData() {
      setLoading(true);
      let res = await fetch('https://mysitebackend.herokuapp.com/api/member/get/all');
      res = await res.json();
      setLoading(false);
      setMemberData(res);
    }
  
    useEffect(() => {fetchData()},[]);
    return (
        <div>
            <Header isAuth={isAuth}/>
            <main>
                <div className="container">
                    {loading ? 
                    <img data-aos="fade-down" className="loading" src={loading_icon} alt="loading_bar" style={{maxWidth: "200px", margin: "50px 0 300px 0"}}/> 
                    : memberData.map(user => (<Card key={user._id} className="card" name={user.name} 
                        pic={user.img_src} lastDate={user.lastDate} expireDate={user.expireDate} />)) }
                </div>
                <div className="bottom_wave" data-aos="slide-up"></div>
                <Payment />
            </main>
            <footer className="footer">11SF</footer>
        </div>
    )
}
