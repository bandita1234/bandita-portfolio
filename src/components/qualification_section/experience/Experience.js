import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  
  import { experience } from "../../../data/experience";

const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor="#F86F03">
        {experience &&
            experience.map((item) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={item?.duration}
              contentStyle={{
                background: "rgba(246, 227, 179, 0.91)",
                color: "#45474B",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #FCA61F" }}

              //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {item?.position}
              </h3>
              <p className="">{item?.company}</p>
              <div>
            {item?.desc}
              </div>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience