import React from "react";
import Header from "./header";
import style from "../list.module.css";
const TeamDetailComp = () => {
  return (
    <>
      <Header />
        <div className={style.detail}>
          <h1>
            I`m Pravasta <span className={style.span}>Guntur</span>
          </h1>
          <p>This is my official portofolio website</p>
          <p>Details and work experience web development</p>
          <a href="#">DOWNLOAD CV</a>
          <div>
          </div>
        </div>
    </>
  );
};

export default TeamDetailComp;
