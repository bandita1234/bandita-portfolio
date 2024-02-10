import React from "react";
import "./Intro.css";
import GithubImg from "../../../img/github.png";
import LinkedinImg from "../../../img/linkedin.png";
import InstaImg from "../../../img/instagram.png";
import BanditaImg from "../../../img/my_img4.jpg";
import Emoji_1 from "../../../img/glassesimoji.png";
import crownImage from "../../../img/crown.png";
import heartEmoji from "../../../img/heartemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro_main" id="intro">
      <div className="i_left">
        <div className="i_name">
          <span>Hey! I Am</span>
          <span>Bandita Bahinipati.</span>
          <span>
            I am an enthusiastic learner with creative insights. Eager to learn
            and explore different areas of technology. I'm very ambitious and
            want to work hard and explore computer science.
            I am an enthusiastic learner with creative insights. Eager to learn
            and explore different areas of technology. I'm very ambitious and
            want to work hard and explore computer science.
            I am an enthusiastic learner with creative insights. Eager to learn
            and explore different areas of technology. I'm very ambitious and
            want to work hard and explore computer science.
          </span>
        </div>
        <div className="intro_btn_container">
        <button className="button i_btn">Hire me!</button>
        <a href="./Bandita_Bahinipati_Resume.pdf" download="Bandita_Bahinipati_Resume">
        <button className="button i_btn">Download Resume</button>
        </a>
        </div>
        <div className="i_icons">
          <img src={GithubImg} alt="GithubImg" />
          <img src={LinkedinImg} alt="LinkedinImg" />
          <img src={InstaImg} alt="InstaImg" />
        </div>
      </div>

      <div className="i_right">
        <div className="Personalimage_container">
          <img className="Bandita_img" src={BanditaImg} alt="BanditaImg" />
        </div>
        <img className="Emoji_1" src={Emoji_1} alt="glassEmoji" />
        <div className="f_div_right">
          <FloatingDiv image={crownImage} txt1="Web" txt2="Developer" />
        </div>
        <div className="f_div_left">
          <FloatingDiv image={heartEmoji} txt1="Frontend" txt2="Backend" />
        </div>
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Intro;
