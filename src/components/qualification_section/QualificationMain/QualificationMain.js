import React, { useState } from "react";
import "./qualificationMain.css";
import Qualification from "../qualification/Qualification";
import Experience from "../experience/Experience";

const QualificationMain = () => {
  const [tab,setTab] = useState(0);
  // console.log(tab);
  return (
    <div>
      <div className="qualification_main">
        <div className={tab==0 ? "selecetd_bg heading" : "heading"} onClick={()=>setTab(0)}>Qualification</div>
        <div className={tab==1 ? "selecetd_bg heading" : "heading"} onClick={()=>setTab(1)}>Work Experience</div>
      </div>
      <div>
      {tab == 0 ?  <Qualification /> : <Experience/>}
       
      </div>
    </div>
  );
};

export default QualificationMain;
