import "./register.css";

export default function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">S'inscire</button>
            <button className="loginRegisterButton">
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}