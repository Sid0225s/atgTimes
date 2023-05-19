import React from "react";
import headimg from "../Media/Rectangle 2-1.png";
import "./overall.css";
import { MdGroupAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="Header">
        <img src={headimg} alt="hed" />
        <div className="contenthead">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        <dib className="joinbutton">
          <a href="#login">Join Group</a>
        </dib>
      </div>
      <div className="botnav">
        <ul className="botnav1 nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link disabled" aria-current="page" href="/">
              All Posts(32)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-current="page" href="/">
              Job
            </a>
          </li>
          <div className="headbut d-grid gap-2 d-md-flex justify-content-md-end">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle bg-light "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Write a post
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="btnjoin btn btn-primary me-md-2"
              type="button"
              href="#login"
            >
              <MdGroupAdd />
              <Link>Join Group</Link>
            </button>
          </div>
        </ul>
      </div>
      <div className="phonenav">
        <div className="posthead">Posts(368)</div>
        <div class="dropdown">
          <button
            class="btn bg-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter: All
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
