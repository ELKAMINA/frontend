import "./register.css";
import {useRef} from 'react';
import {loginCall} from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';
//... Hook pour revenir en arrière ou après
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const city = useRef()
  const from = useRef()
  const relationship = useRef()
  const description = useRef()
  const history = useNavigate()

  const handleClick = async (e) =>{
    e.preventDefault()
    if (passwordAgain.current.value !== password.current.value)
    {
      password.current.setCustomValidity("Passwords doesn't match! Please try again.")
    }
    else
    {
      const user = {
        username : username.current.value,
        email: email.current.value,
        password: password.current.value,
        city : city.current.value,
        from: from.current.value,
        relationship: relationship.current.value,
        desc : description.current.value
      };
      await axiosInstance.post("/auth/register", user)
      .then((resp) => { 
        console.log(resp.data)
        if (resp.data === "Email already exists")
        {
          alert("Attention ! Cet email existe déjà")
          history("/register")
        }
        else 
        {
          alert("Félicitations ! Ton compte a été créé")
          history("/login")
        }
      })
      .catch(err =>(
        console.log(err)
        ))

    }
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
          <form className="loginBox-register" onSubmit={handleClick}>
            <input placeholder="Username"  ref={username} className="loginInput" required/>
            <input placeholder="Email" type="email" ref={email} className="loginInput" required/>
            <input placeholder="Password" minLength="6" type="password" ref={password} className="loginInput" required/>
            <input placeholder="Password Again" minLength="6" type="password" ref={passwordAgain} className="loginInput" required/>
            <input placeholder="City"   ref={city} className="loginInput" required/>
            <input placeholder="From"   ref={from} className="loginInput" required/>
            <input placeholder="Relationship : Type 1 for Married, 2 for Single, 3 for empty " ref={relationship}className="loginInput" required/>
            <input placeholder="Description : Une phrase qui te représente" ref={description} className="loginInput" required/>
            <button className="loginButton" type="submit">S'inscire</button>
            <Link to="/login">
              <button className="loginRegisterButton">
              Se connecter
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}