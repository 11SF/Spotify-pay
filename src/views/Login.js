import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'

import './Login.css'
export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isBlack, setIsBlank] = useState(false);
    const [valid, setValid] = useState(false);

    // const history = useHistory()

    const handleUsername = e => {
        setUsername(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        if(!username||!password) {
            setIsBlank(true);
        } else {
            if(username === "admin" && password === "admin") 
                setValid(true)
            else
                setValid(false)

            if(valid) {
                sessionStorage.setItem("session", true);
                <Redirect to="/admin"></Redirect>
            }
               
        }
    }

    return (
        <div className="container" id="login">
            <Link className="back_btn" to="/" data-aos="fade-right">ย้อนกลับ</Link>
            <div className="login_wrapper">
            <div className="loginBox" data-aos="zoom-in">
                <div className="logo" id="login_logo">Admin Area!!!</div>
                <p className="detail">สำหรับหัวหน้าครอบครัว 🌟</p>
                <form onSubmit={handleSubmit}>
                    <div className="input_area">
                        <input className="login_input" placeholder="username" type="text" onChange={handleUsername}></input>
                        <input className="login_input" placeholder="password" type="password" onChange={handlePassword}></input>
                    </div>
                    {isBlack ? <div>กรุณากรอกข้อมูลให้ครบถ้วน</div> : ''}
                    <button className="login_btn" onClick={handleSubmit}>เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
        </div>
    )
}
