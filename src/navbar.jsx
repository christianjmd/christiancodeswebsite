import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about-page">About Me</Link>
        </li>
        <li>
          <Link to="/contact-page">Contact</Link>
        </li>
        <li>
            <Link to="/education-page">Education</Link>
        </li>
        <li>
            <Link to="/experience-page">Experience</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;