import React from "react";
import sticker from "../Media/Group 3.png";
import "./overall.css";
import { FcGoogle } from "react-icons/fc";
import facebook from "../Media/f_logo_RGB-Blue_1024.png";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div className="loginpage" id="login">
      <div className="login">
        <div className="topbox">
          <h5>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h5>
        </div>
        <div className="botbox">
          <div className="signin">
            <h1>Create Account</h1>
            <form action="login">
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
            </form>
            <button className="signbut">Create Account</button>
            <button className="facebook">
              <img src={facebook} alt="nuwhu" /> Sign up with Facebook
            </button>
            <button className="google">
              <FcGoogle />
              Sign up with Google
            </button>
            <Link className="homeback" to="/">
              Home
            </Link>
          </div>
          <div className="sticker">
            <div>
              {" "}
              Already have an account? <Link to="/login">Sign In</Link>
            </div>
            <img src={sticker} alt="dbdu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
