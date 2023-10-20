import React from "react";
import "../navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className="n_wrapper">
      <div className="n_left">
        <div className="n_name">Bandita</div>
        <span>Toggle</span>
      </div>
      <div className="n_right">
        <div className="n_lists">
          <ul style={{listStyleType:"none"}}>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Qualification</li>
            <li>Resume</li>
          </ul>
        </div>
        <button className="button n_btn">contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
