import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import cookies from "browser-cookies";
// import { v4 as uuidv4 } from 'uuid';
import history from "../../../helpers/history";
// import Axios from 'axios';
import swal from 'sweetalert';
// import { useHistory } from 'react-router-dom';
import './index.scss';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const useHistory =useHistory();

    async function handleSubmit(event) {

        event.preventDefault();

        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user);
            swal('Login Successfull');
            history.push('/home');
            // window.location.href = '/home'

        } else {
            swal('Please Check Username And Password');
        }
    }

    return (
        <div className="form">
            <h1 className="heading">Login page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    // name="email"
                    value={email}
                    placeholder="email/username"
                    onChange={(e) => { setEmail(e.target.value) }}
                // noValidate
                />
                <input
                    type="password"
                    // name="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                // noValidate
                />
                <button type="submit" className="submit-btn">Login</button>
                {/* <p> */}
            </form>
            <Link to={"./register"} className="link">don't have an account? Rgister here</Link>
            <Link to={"./home"} className="link">main-page</Link>
        </div>
    );
}

export default Login;