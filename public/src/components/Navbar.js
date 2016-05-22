import React, { Component } from 'react';
import { Link } from 'react-router';
require('../styles/navbar.scss');

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__left">
          <ul className="navbar__items">
            <li className="navbar__item"><Link to="splash">Home</Link></li>
            <li className="navbar__item"><Link to="timelapses">Timelapses</Link></li>
            <li className="navbar__item">Upload</li>
          </ul>
        </div>

        <div className="navbar__right">
          <ul className="navbar__items">
            <li className="navbar__item">Sign Up</li>
            <li className="navbar__item">Login</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;