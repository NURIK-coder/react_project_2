import React from 'react';

function Header({ logo, profileName, profileAvatar }) {
  return (
    <header className="header">
      <div className="logo">{logo}</div>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="profile">
        <img src={profileAvatar} alt={profileName} />
        <span className='username'>{profileName}</span>
      </div>
    </header>
  );
}

export default Header;