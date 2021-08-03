import React from 'react'
import { useHistory } from 'react-router-dom'

import './Admin.css'
function Admin({setIsAuth}) {
    const history = useHistory();

    function logout() {
        sessionStorage.removeItem("session");
        setIsAuth(false);
        history.push("/")
    }
    return (
        <div className="admin">
            <div className="wrap">
                <h1>Admin Page</h1>
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
}

export default Admin
