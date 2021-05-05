import React from "react";
import { programmingSkills, softSkills, MSoffice } from "../data";

function Skills() {
  return (
    <>
      <img
        className="skills-background"
        src="http://s018.radikal.ru/i527/1701/d3/b145e38b1885.jpg"
        alt="taj-mahal"
      ></img>
      <div className="skills">
        <ul>
          <h4>Soft skills</h4>
          {softSkills.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <ul>
          <h4>Programming skills</h4>
          {programmingSkills.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <ul>
          <h4>MS office</h4>
          {MSoffice.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Skills;
