import React from "react";
import { education } from "../../data";

function Education() {

  return (
    <div className='edu-info'>
      <h3>Education</h3>
      <ul>
        {education.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Education;
