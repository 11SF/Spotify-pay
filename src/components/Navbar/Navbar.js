import React, {useState} from 'react'

import './Navbar.css'

import hamberger from '../../asset/hamburger_icon.svg'
// import top_wave from '../../asset/wave.svg';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    function dropMenu() {
        setToggle(!toggle);
    }
    return (
        <div className="header">
            <div className="item">
                <div className="header_wrap">
                    <p className="logo">ถึงเวลาจ่ายค่า Spotify รึยังน้าาา</p>    
                    <p className="header_btn">เข้าสู่ระบบ</p>
                    <img className="hamberger" src={hamberger} alt="hamberger" onClick={()=> dropMenu()}></img>
                </div>
            </div> 
            <div className={toggle ? "dropMenu" : "dropMenu hidden"}>
                <ul>
                    <li className="menu_item">เข้าสู่ระบบ</li>
                    <li className="menu_item">เข้าสู่ระบบ</li>
                    <li className="menu_item">เข้าสู่ระบบ</li>
                    <li className="menu_item">เข้าสู่ระบบ</li>
                </ul>
            </div>
            <div className="top_wave"></div>
           {/* <img className="top_wave" src={top_wave} alt='top_wave' />   */}
        </div>
    )
}
