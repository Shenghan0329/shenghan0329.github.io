import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Shenghan Cheng" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Shenghan0329" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/shenghan-cheng-14130b19b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shenghan (John) Cheng</h1>
          <p>Full Stack Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Shenghan0329" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/shenghan-cheng-14130b19b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;