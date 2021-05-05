import React from "react";
import PersonalInfo from '../components/AboutMe/PersonalInfo';
import Education from "../components/AboutMe/Education";
import LifePriorities from '../components/AboutMe/LifePriorities';

function AboutMe() {
  return (
    <div>
      <h1>About</h1>
      <img className='aboutMe-background'
        src="https://interesnyefakty.com/sites/default/files/i/31219/6-11/ef09c3eba6ad.jpg"
        alt="image0"
      />
      <Education />
      <PersonalInfo />
      <LifePriorities />
    </div>
  );
}

export default AboutMe;
