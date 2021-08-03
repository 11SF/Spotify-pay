import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

import hamberger from '../../asset/hamburger_icon.svg'
// import top_wave from '../../asset/wave.svg';

export default function Navbar({isAuth}) {
    const [toggle, setToggle] = useState(false);
    function dropMenu() {
        setToggle(!toggle);
    }
    return (
        <div className="header" data-aos="slide-down">
            <div className="item">
                <div className="header_wrap">
                    <p className="logo" id="nav_logo" >ถึงเวลาจ่ายค่า Spotify รึยังน้าาา</p>  
                    { isAuth ? <Link to="/admin" className="header_btn" ><p>ข้อมูลสมาชิก</p></Link>
                        : <Link to="/login" className="header_btn" ><p>เข้าสู่ระบบ</p></Link>}  
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
