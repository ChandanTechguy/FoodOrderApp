import React from "react";
import fooda from "../assests/fooda.jpeg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${fooda})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About</h1>
        <p>
          The approach to the menu was easy. We had no interest in trying to
          reinvent food. We went with choices that were popular catering
          requests — basic, down-home style — just from a wide range of regions.
          We are known for our generous portions of BBQ, Southern, Cajun/Creole
          meals, plus a touch of Caribbean fun. We will tell you now – save room
          for dessert!
        </p>
      </div>
    </div>
  );
}

export default About;
