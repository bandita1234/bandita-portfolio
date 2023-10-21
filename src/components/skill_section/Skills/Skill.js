import React from "react";
import "./skill.css";
import SkillsDiv from "../SkillsDiv/SkillsDiv";

//images
import html from "../../../img/HTML.png"
import css from "../../../img/CSS.png"
import js from "../../../img/JS.webp"
// import react from "../../img/REACT.jpg"
import react from "../../../img/REACT.jpg"
import bootstrap from "../../../img/BOOTSTRAP.png"
import mongo from "../../../img/MONGODB.png"
import node from "../../../img/NODE.png"
import express from "../../../img/EXPRESS.png"
import tailwind from "../../../img/TAILWIND.jpg"
import mern from "../../../img/MERN.png"

import git from "../../../img/GIT.png"
import github from "../../../img/GITHUB.jpg"
import react_native from "../../../img/REACT_NATIVE.png"




const Skill = () => {
  return (
    <div className="skill_section">
      <h2 className="heading">My Skills</h2>

      <div className="skill_container">
        <SkillsDiv img={html} title="HTML" />
        <SkillsDiv img={css} title="CSS"/>
        <SkillsDiv img={js} title="JAVASCRIPT"/>
        <SkillsDiv img={react} title="REACT"/>
        <SkillsDiv img={bootstrap} title="BOOTSTRAP"/>

        <SkillsDiv img={mongo} title="MONGODB"/>
        <SkillsDiv img={node} title="NODE JS"/>
        <SkillsDiv img={express} title="EXPRESS JS"/>
        <SkillsDiv img={tailwind} title="TAILWIND CSS"/>
        <SkillsDiv img={mern} title="MERN STACK"/>

        <SkillsDiv img={react_native} title="REACT NATIVE"/>
        <SkillsDiv img={git} title="GIT"/>
        <SkillsDiv img={github} title="GITHUB"/>
      </div>
    </div>
  );
};

export default Skill;
