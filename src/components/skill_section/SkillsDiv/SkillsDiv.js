import React from 'react'
import './skillsDiv.css'


const SkillsDiv = (props) => {
  return (
    <div className='skilldiv_main'>
        <div className='skilldiv_img'>
            <img src={props.img} alt="" />
        </div>
        <p>{props.title}</p>
    </div>
  )
}

export default SkillsDiv