import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'
export default function Login() {
    return (
        <div className="container" id="login">
            <Link className="back_btn" to="/" data-aos="fade-right">ย้อนกลับ</Link>
            <div className="login_wrapper">
            <div className="loginBox" data-aos="zoom-in">
                <div className="logo" id="login_logo">Admin Area!!!</div>
                <p className="detail">สำหรับหัวหน้าครอบครัว 🌟</p>
                <form>
                    <div className="input_area">
                        <input className="login_input" placeholder="username" type="text" ></input>
                        <input className="login_input" placeholder="password" type="password" ></input>
                    </div>
                    <button className="login_btn">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
        </div>
    )
}
