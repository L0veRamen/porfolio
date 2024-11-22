import "./profile.css";
import Typical from 'react-typical';
import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import ResumePDF from "../../../Chen_Qian_Resume_v1.pdf" 


export default function Profile() {
  return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="#">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Chen Qian</span>
            </span>
            </div>
            <div className="profile-details-role">
                  <span className="primary-text">
                    {""}
                    <h1>
                      {""}
                      <Typical
                          loop={Infinity}
                          steps={[
                            "Gamer 💀",
                            1000,
                            "Developer 🎃",
                            1000,
                            "Coding is Fun 👿",
                            1000,
                          ]}
                      />
                    </h1>
                    <span className="profile-role-tagline">
                     Your limitation is only your imagination.
                    </span>
                  </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire me
              </button>
              <a href={ResumePDF} download="Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
          </div>
        </div>
      </div>
  );
}
