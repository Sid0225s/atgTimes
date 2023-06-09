import React from "react";
import sticker from "../Media/Group 3.png";
import "./overall.css";
import { FcGoogle } from "react-icons/fc";
import facebook from "../Media/f_logo_RGB-Blue_1024.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginpage">
      <div className="login">
        <div className="topbox">
          <h5>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h5>
        </div>
        <div className="botbox">
          <div className="signin">
            <h1>Sign in</h1>
            <form action="login">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
            <button className="signbut">Sign in</button>
            <button className="facebook">
              <img src={facebook} alt="nuwhu" /> Sign in with Facebook
            </button>
            <button className="google">
              <FcGoogle />
              Sign in with Google
            </button>
            <div className="forget">Forgot Password?</div>{" "}
            <Link className="homeback" to="/">
              Home
            </Link>
          </div>
          <div className="sticker">
            <div>
              {" "}
              Don’t have an account yet?{" "}
              <Link to="/create">Create new for free!</Link>
            </div>
            <img src={sticker} alt="dbdu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
