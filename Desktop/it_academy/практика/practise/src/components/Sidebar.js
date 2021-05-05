import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import myphoto from "../images/myphoto.jpg";
import person from "../images/person.svg";
import portfolio from "../images/portfolio.svg";
import contact from "../images/contact.svg";
import house from "../images/house.svg";
import skills from "../images/skills.svg";

function Sidebar() {
  return (
    <div className="sidebar-block">
      <img className="myphoto" src={myphoto} alt="logo"></img>
      <p className='name'>Gulzana Katkeldieva</p>

      <ul className="menu">
        <li>
          <img src={house} alt="icon"></img>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <img src={person} alt="icon"></img>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <img src={portfolio} alt="icon"></img>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <img src={skills} alt="icon"></img>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <img src={contact} alt="icon"></img>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
