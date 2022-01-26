import React, { useContext } from 'react';
import "./Login.css";
// import {auth, provider} from "./firebase"
// import { useStateValue } from './StateProvider';
// import { actionTypes } from './reducer';
import {useRef} from 'react';
import {loginCall} from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';



function Login() {
  // ... To prevent re-rendering
  const email = useRef()
  const password = useRef()
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const [input, setInput] = useState("")

  const handleClick = (e) =>{
    e.preventDefault()
    loginCall({email: email.current.value, password : password.current.value}, dispatch)
  }
  return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Shareader</h3>
            <span className="loginDesc">
              Let's share something interesting.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input 
              value={input}
              placeholder="Email" 
              type="email"  
              required 
              className="loginInput" 
              onChange={(e) => setInput(e.target.value)}
              ref={email} />
              <input placeholder="Password"  minLength="6" type="password" className="loginInput" ref={password} />
              <button className="loginButton" disabled={isFetching}>{isFetching ?  <CircularProgress/> : "Log in"}</button>
              <span className="loginForgot">Forgot Password?</span>
              <Link to="/register">
                <button className="loginRegisterButton">
                  Create a New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default Login
