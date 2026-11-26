import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="left-head">
            <Link>
              <div className="logo"></div>
              <h1>Radah Softwares</h1>
            </Link>
          </div>
          <nav>
            <NavLink>Home</NavLink>
            <div className="nav-item">
              <NavLink>
                About{" "}
                <span className="material-symbols-outlined dropdown-arrow">
                  keyboard_arrow_down
                </span>
              </NavLink>
              <div className="about-dropdown-links">
                <NavLink>Our Mission</NavLink>
                <NavLink>Our Vision</NavLink>
                <NavLink>Our Core values</NavLink>
              </div>
            </div>
            <div className="nav-item">
              <NavLink>
                Services{" "}
                <span className="material-symbols-outlined dropdown-arrow">
                  keyboard_arrow_down
                </span>
              </NavLink>
              <div className="services-dropdown-links">
                <NavLink>Web development</NavLink>
                <NavLink>App development</NavLink>
                <NavLink>Graphic design</NavLink>
              </div>
            </div>
            <div className="nav-item">
              <NavLink>
                Classes{" "}
                <span className="material-symbols-outlined dropdown-arrow">
                  keyboard_arrow_down
                </span>
              </NavLink>
              <div className="classes-dropdown-links">
                <NavLink>Coding classes</NavLink>
                <NavLink>Computer classes</NavLink>
              </div>
            </div>
            <div className="nav-item">
              <NavLink>
                Events{" "}
                <span className="material-symbols-outlined dropdown-arrow">
                  keyboard_arrow_down
                </span>
              </NavLink>
              <div className="events-dropdown-links">
                <NavLink>Host an event</NavLink>
                <NavLink>Available events </NavLink>
              </div>
            </div>
            <NavLink>Contact Us</NavLink>
          </nav>
          <button className="signin-btn">
            <span className="material-symbols-outlined">person</span>
            Sign in
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
