import React from 'react'

import './LoginBox.css';

export default function LoginBox() {
    return (
        <div className="login_wrapper">
            <div className="loginBox">
                <div className="logo">Admin Area!!!</div>
                <p className="detail">สำหรับหัวหน้าครอบครัว 🌟</p>
                <form>
                    <div className="input_area">
                        <input className="login_input" placeholder="username" ></input>
                        <input className="login_input" placeholder="password" ></input>
                    </div>
                    <button className="login_btn">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
    )
}
