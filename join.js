import React, { useState } from "react";
//import axiosInstance from "/axiosInstance";
import './css/Join.css';
const Join = () => {
    const [joininInput, setJoinInput] = useState({
        userId: "",
        password: "",
    });

    const [username, setUsername1] = useState('');
    const [password, setPassword1] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
  
    const handleSignUp = () => {
      console.log('Sign up button clicked');
    };
    
    return (
        <div className="Sign">
         <nav className="S-navbar">
                <ul>
                    <li><a href="/">HOME</a></li>
                </ul>
            </nav>
        <div className="signup-box">
        <h2 className="signup">회원가입</h2>
        <form action="/joinProc" method="get" name="joinForm">
            <div className="input-group">
                <input
                    type="text"
                    name="username"
                    placeholder="ID"
                    value={username}
                    onChange={(e) => setUsername1(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword1(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="VERIFY PASSWORD"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="E-MAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="PHONE NUM"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                <div className="button-group">
                <button onClick={handleSignUp}>회원가입</button>
            </div>
        </form>
        </div>
      </div>
    );
};

export default Join;

{/* <input type="text" name="username" placeholder="Username"/>
<input type="password" name="password" placeholder="Password"/>
<input type="submit" value="Join"/> */}
