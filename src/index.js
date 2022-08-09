import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Nav } from "./sections/nav/nav";
import { About } from "./sections/about/about";
import { Experience } from "./sections/experience/experience";
import { Projects } from "./sections/projects/projects";
import { Contact } from "./sections/contact/contact";
import { Footer } from "./sections/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
