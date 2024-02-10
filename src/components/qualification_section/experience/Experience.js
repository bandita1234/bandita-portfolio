import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import exp_icon from "../../../img/experience.svg"
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
              iconStyle={{
                background: "#fdedce",
                color: "#fff",
                borderRadius: "50%",
              }}
              icon={
                <img
                  src={exp_icon}
                  alt="experience Icon"
                  style={{ maxWidth: "100%", height: "auto" }} // Adjust the size here
                />
              }

              contentStyle={{
                background: "#fdedce",
                border: "4px solid #FCA61F",
                borderStyle: "double",
                color: "#45474B",
                borderRadius: "8px",
                // backgroundImage: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%);"
              }}
              contentArrowStyle={{ borderRight: "20px solid  #fdedce" }}
            >
              <h3 className="vertical-timeline-element-title">
                {item?.position}
              </h3>
              <h4 className="">{item?.company}</h4>
              <div>{item?.desc}</div>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
