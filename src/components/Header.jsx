import React from "react";
import headimg from "../Media/Rectangle 2-1.png";
import "./overall.css";

function Header() {
  return (
    <div>
      <div className="Header">
        <img src={headimg} alt="hed" />
        <div className="contenthead">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="botnav">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link disabled" aria-current="page" href="/">
              All Posts(32)
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/">
              Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/">
              Event
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-current="page" href="/">
              Job
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
