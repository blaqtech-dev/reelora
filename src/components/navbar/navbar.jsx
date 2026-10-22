
import React, { useEffect, useRef } from 'react';
import './navbar.css';

import logo from '../../assets/reelora1.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

import { Logout } from '../../firebase';

const Navbar = () => {
  // Reference to the navbar DOM element
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Prevent errors if the navbar element is unavailable
      if (!navRef.current) return;

      if (window.scrollY >= 80) {
        navRef.current.classList.add('dark-nav');
      } else {
        navRef.current.classList.remove('dark-nav');
      }
    };

    // Register the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Set the correct navbar style on initial render
    handleScroll();

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Reelora logo" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img
          src={search_icon}
          alt="Search"
          className="icons"
        />

        <p>Children</p>

        <img
          src={bell_icon}
          alt="Notifications"
          className="icons"
        />

        <div className="profile-navbar">
          <img
            src={profile_img}
            alt="Profile"
            className="profile_img"
          />

          <img
            src={caret_icon}
            alt="Profile menu"
            className="caret_icon"
          />

          <div className="dropdown">
            <p onClick={() => Logout()}>
              Sign out of Reelora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
