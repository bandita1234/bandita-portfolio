import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import qual_icon from "../../../img/education.svg";
import { qualification } from "../../../data/qualification";

const Qualification = () => {
  // console.log(experience);
  return (
    <div>
      <VerticalTimeline lineColor="#F86F03">
        {qualification &&
          qualification.map((item) => (
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
                  src={qual_icon}
                  alt="Qualification Icon"
                  style={{ maxWidth: "100%", height: "auto" }} // Adjust the size here
                />
              }
              // icon={qual_icon}
              contentStyle={{
                background: "#fdedce",
                border: "4px solid #FCA61F",
                borderStyle: "double",
                color: "#45474B",
                borderRadius: "8px",
                // backgroundImage: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%);"
              }}
              contentArrowStyle={{ borderRight: "20px solid  #fdedce" }}

              //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {item?.education}
              </h3>
              <h4 className="">{item?.institution}</h4>
              <h4>
                {item?.percentage ? "Percentage" : "CGPA"} :{" "}
                {item?.percentage ? item?.percentage : item?.cgpa}
              </h4>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>

      {/* <VerticalTimeline lineColor="#F86F03">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
        //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          
          contentStyle={{ background: 'rgba(246, 227, 179, 0.91)', color: "#45474B" }}
          contentArrowStyle={{ borderRight: "7px solid  #FCA61F" }}

        //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
        //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
        //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
        //   iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline> */}
    </div>
  );
};

export default Qualification;
