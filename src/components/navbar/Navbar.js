import React, { useState } from "react";
import Switch from "react-switch";
import "../navbar/Navbar.css";
import { Link } from "react-scroll";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({ checked, setChecked }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleChange = (newChecked) => {
    setChecked(newChecked);
  };
  // console.log(checked);

  return (
    <div className="n_wrapper">
      <div className="n_left">
        <div className="n_name">Bandita</div>
        <div>
          <Switch
            checked={checked}
            onChange={handleChange}
            onColor="#86d3ff"
            // offColor="#86d3ff"
            onHandleColor="#FCA61F"
            handleDiameter={26}
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MdOutlineDarkMode size={22} />
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MdOutlineLightMode size={20} />
              </div>
            }
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={22}
            width={55}
            className="react-switch"
            // id="material-switch"
          />
        </div>
      </div>
      <div className="n_right">
        <div className="n_lists">
          <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Skills
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Projects
          </Link>

          <Link
            to="qualification"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>
          <Link
            to="qualification"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {/* Qualification */}
            Education
          </Link>

          <a
            href="./Bandita_Bahinipati_Resume.pdf"
            download="Bandita_Bahinipati_Resume"
          >
            Resume
          </a>
          {/* <a
            href="./Bandita_Bahinipati_Resume.pdf"
            download="Bandita_Bahinipati_Resume"
          >
            Resume
          </a> */}
        <button className="button n_btn">contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
