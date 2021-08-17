import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../services/firebase';

import './Admin.css'
function Admin({setIsAuth}) {
    const history = useHistory();

    function logout() {
        // sessionStorage.removeItem("session");
        // setIsAuth(false);
        auth.signOut();
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
