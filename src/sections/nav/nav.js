import React, { useState } from "react";
import "./style.css";

const NAV_LINKS = {
  ABOUT: "About Me",
  EXP: "Experience",
  PROJECTS: "My Projects",
  CONTACT: "Contact Me",
};

export const Nav = () => {
  const [selected, setSelected] = useState("");

  function handleClick(e) {
    setSelected(e.target.innerText);
  }

  console.log(selected);
  return (
    <div id="nav">
      <a
        href="#about"
        style={getStyle(selected, NAV_LINKS.ABOUT)}
        onClick={handleClick}
      >
        {NAV_LINKS.ABOUT}
      </a>
      <a
        href="#experience"
        style={getStyle(selected, NAV_LINKS.EXP)}
        onClick={handleClick}
      >
        {NAV_LINKS.EXP}
      </a>
      <a
        href="#projects"
        style={getStyle(selected, NAV_LINKS.PROJECTS)}
        onClick={handleClick}
      >
        {NAV_LINKS.PROJECTS}
      </a>
      <a
        href="#contact"
        style={getStyle(selected, NAV_LINKS.CONTACT)}
        onClick={handleClick}
      >
        {NAV_LINKS.CONTACT}
      </a>
    </div>
  );
};

function getStyle(selectedValue, valueOfLink) {
  return selectedValue === valueOfLink
    ? { backgroundColor: "black", color: "#93E9BE" }
    : {};
}
