import React from 'react'
import "./skill.css"
import SkillsDiv from '../SkillsDiv/SkillsDiv'

const Skill = () => {
  return (
    <>
    <h2 className='heading'>My Skills</h2>
    <div className='skill_container'>
        <SkillsDiv/>
        <SkillsDiv/>
        <SkillsDiv/>
        <SkillsDiv/>
    </div>
    </>
  )
}

export default Skill