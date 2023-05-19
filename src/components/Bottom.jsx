import React from "react";
import img1 from "../Media/Rectangle 5-2.png";
import "./overall.css";
import sarthak from "../Media/Rectangle 3-4.png";
import share from "../Media/Group 2.png";
import Edu from "../Media/Rectangle 5.png";
import sarah from "../Media/Rectangle 3-1.png";
import meetup from "../Media/Rectangle 5-1.png";
import ronal from "../Media/Rectangle 3-2.png";
import img2 from "../Media/Group 53.png";
import location from "../Media/Outline.png";
import pencil from "../Media/baseline-edit-24px.png";
import joseph from "../Media/Rectangle 3-3.png";
import { AiOutlineEye } from "react-icons/ai";

function Bottom() {
  return (
    <div className="bottomcard">
      <div className="card1">
        <div className="card3">
          <div class="card">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              {" "}
              <p>✍️ Article</p>
              <div className="h4">
                <h4>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h4>
                <div class="dropdown btn">
                  <div
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h3>...</h3>
                  </div>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button class="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="card-text">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <div className="cardbot">
                <div className="leftcard">
                  {" "}
                  <img src={sarthak} alt="sart" />
                  <h4>Sarthak kamra</h4>
                </div>

                <div className="rightcard">
                  <div className="views">
                    {/* <AiOutlineEye /> */}
                    <AiOutlineEye />
                    1.4k views
                  </div>
                  <div className="share">
                    <img src={share} alt="dij" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div class="card">
            <img src={Edu} class="card-img-top" alt="..." />
            <div class="card-body">
              {" "}
              <p>🔬️ Education</p>
              <div className="h4">
                <h4>
                  {" "}
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h4>
                <div class="dropdown btn">
                  <div
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h3>...</h3>
                  </div>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button class="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="card-text">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <div className="cardbot">
                <div className="leftcard">
                  {" "}
                  <img src={sarah} alt="sart" />
                  <h4>Sarah west</h4>
                </div>

                <div className="rightcard">
                  <div className="views">
                    <AiOutlineEye />
                    1.4k views
                  </div>
                  <div className="share">
                    <img src={share} alt="dij" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div class="card">
            <img src={meetup} class="card-img-top" alt="..." />
            <div class="card-body">
              {" "}
              <p>🗓️ Meetup</p>
              <div className="h4">
                <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                <div class="dropdown btn">
                  <div
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h3 className="h3">...</h3>
                  </div>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button class="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <img src={img2} alt="ih" className="img20" />
              <button className="cardbutton2">Apply on Timesjobs</button>
              <div className="cardbot">
                <div className="leftcard">
                  {" "}
                  <img src={ronal} alt="sart" />
                  <h4>Ronal Jones</h4>
                </div>

                <div className="rightcard">
                  <div className="views">
                    <AiOutlineEye />
                    1.4k views
                  </div>
                  <div className="share">
                    <img src={share} alt="dij" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div class="card">
            <div class="card-body">
              <p>💼️ Job</p>
              <h5 class="card-title">Software Developer</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="cardbutton">Apply on Timesjobs</button>

              <div className="cardbot">
                <div className="leftcard">
                  {" "}
                  <img src={joseph} alt="sart" />
                  <h4>Joseph Gray</h4>
                </div>

                <div className="rightcard">
                  <div className="views">
                    <AiOutlineEye />
                    1.4k views
                  </div>
                  <div className="share">
                    <img src={share} alt="dij" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardpar">
        <div className="upcor">
          <div className="lcat">
            <div className="serchbar">
              <img src={location} alt="dn" />
              <input type="text" />
            </div>
            <img src={pencil} alt="wuwi" />
          </div>
          <div className="locline"></div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
