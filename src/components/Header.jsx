import React from 'react';

// ✅ Import images from your assets folder
import spotLogo from '../assets/icons/spot-logo.svg';
import avatar from '../assets/images/avatar.png';
import editIcon from '../assets/icons/edit.svg';
import plusIcon from '../assets/icons/plus.svg';

export default function Header() {
  return (
    <header role="banner">
      <div className="logo-container" aria-label="Logo container">
        <a href="#" className="logo" aria-label="Go to homepage">
          <img src={spotLogo} alt="Insta-spot logo and home-page link" />
          <span className="logo-text">SPOTS</span>
        </a>
      </div>

      <div className="banner" aria-label="User profile banner">
        <div className="avatar-section" role="group" aria-label="User information">
          <img
            className="avatar-img"
            id="profileImage"
            src={avatar}
            alt="Profile image of Bessie Coleman"
            loading="lazy"
          />
          <div className="properties">
            <div className="details">
              <h3 className="name" id="profileName">Your Name Here</h3>
              <p className="description" id="profileTitle">
                Your short description here.
              </p>
            </div>
            <button className="btn btn-light" id="editBtn" type="button" aria-label="Edit profile">
              <img src={editIcon} alt="edit icon" />
              Edit Profile
            </button>
          </div>
        </div>

        <button type="button" className="btn btn-dark" id="post-btn" aria-label="Create new post">
          <img src={plusIcon} alt="+" />
          New Post
        </button>
      </div>
    </header>
  );
}
