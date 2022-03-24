import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="# facebook will be added here">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/nelson-mmbando-8255a5110/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="# Youtube will be added here">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#Instgarm Account will be added here">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/nelsonRoberts1968">
                <i className="fa fa-github"></i>
              </a>
              <a href="#">
                <i className="fa fa-stackoverflow"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Nelson</span>
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
                    "Highly Motivated Fullstack Software Engineer 👨🏿‍💻 ",
                    1000,
                    "Android Mobile Software Engineer 🤖 ",
                    1000,
                    "MERN Stack Engineer 🖥 ",
                    1000,
                    "Databases Management ",
                    1000,
                    "Cross Platform Native Mobile Developer 🕸 ",
                    1000,
                    "React Native MidLevel Developer 📱 ",
                    1000,
                    "Java Developer ☕️",
                    1000,
                    "ioS SDK Mobile Junior Developer 🖥 ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building Fullstack Application for both font end and backend
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Work With Me {""}
            </button>
            <a href="#resume.pdf" download="Nelson resume.pdf">
              <button className="btn highlighted-btn">
                {" "}
                View Resume{" "}
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  );
}
