import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Websocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Websocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Retype Password " className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <div className="prompt">Already have an Account?</div>
            <button className="loginRegisterButton">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}