import React from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import '../style.css';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className={`navbar-link ${location.pathname === '/explore' ? 'active' : ''}`}
          >
            Meme Explorer
          </Link>
        </li>
        <li>
          <Link
            to="/upload"
            className={`navbar-link ${location.pathname === '/upload' ? 'active' : ''}`}
          >
            Meme Upload
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`navbar-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/leaderboard"
            className={`navbar-link ${location.pathname === '/leaderboard' ? 'active' : ''}`}
          >
            Leaderboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
