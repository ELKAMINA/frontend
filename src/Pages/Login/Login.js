import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
// import {auth, provider} from "./firebase"
// import { useStateValue } from './StateProvider';
// import { actionTypes } from './reducer';

function Login() {
    // const [state, dispatch] = useStateValue();
    // const signIn =  () => {
    //     auth
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //         dispatch({
    //             type:actionTypes.SET_USER,
    //             user:result.user,
    //         });
    //     })
    //     .catch((error) => alert(error.message))
    // };
        // <div className="login">
        //     <div className="login_logo">

        //         <img src="./assets/shareader.png" alt=""/>


        //         {/* <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/> */}
        //     </div>

        //     <Button className="signin" type="submit" > Se connecter </Button>
        //     <a href='/'> Mot de passe oublié ?</a>

        //     <div className='ou_mdp'> --------------ou---------------- </div>
        //     <Button className="create" type="submit" > Créer un compte </Button>
        // </div>
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
                  <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                      Create a New Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }

export default Login
