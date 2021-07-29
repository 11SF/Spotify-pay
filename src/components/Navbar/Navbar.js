import React from 'react'

import './Navbar.css'
import top_wave from '../../asset/wave.svg';

export default function Navbar() {
    return (
        <div className="header">
            <div className="item">
                <div className="container mx-auto">
                    <p className="logo">ถึงเวลาจ่ายค่า Spotify รึยังน้าาา</p>    
                    <p className="header_btn">เข้าสู่ระบบ</p>
                </div>
            </div> 
           <img className="top_wave" src={top_wave} alt='top_wave' />  
        </div>
    )
}
