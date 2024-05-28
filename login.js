import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/Login.css';
// import axiosInstance from "/axiosInstance";

const Login = () => {
    const [loginInput, setLoginInput] = useState({
        userId: "",
        password: "",
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    // useEffect(() => {
    //     axios.post('/login')
    //         .then((res) => {
    //             setHello(res.data);
    //         })
    // }, []);

    // const onLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await axiosInstance.post(`/com/login`, {
    //             userId: loginInput.userId,
    //             password: loginInput.password,
    //         });
    //         if (res.status === 200) {
    //             console.log(res.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     if(!this.state.errcount) {
    //         const data = new FormData(this.form)
    //         fetch(this.form.action, {
    //           method: this.form.method,
    //           body: new URLSearchParams(data)
              
    //         })
    //         .then(v => {
    //             if(v.redirected) window.location = v.url
    //         })
    //         .catch(e => console.warn(e))
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("/loginProc", loginInput);
    //         console.log(response.data); // You can handle the response as needed
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };

    return (
        <div className="Login">
           <nav className="navbar">
                <ul>
                    <li><a href="/">HOME</a></li>
                </ul>
            </nav>
        <div className="content">
          <div className="login-box">
            <h2 className="login1">LOGIN</h2>
            <form action="/loginProc" method="post" name="loginForm">
              <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-group">
                    <button type="submit">로그인</button>
             </div>
        </form>
          </div>
          </div>
      </div>
        
    );
};

// <span>id : </span><input type="text" name="username" required />
// <span>password : </span><input type="password" name="password" required/>
export default Login;