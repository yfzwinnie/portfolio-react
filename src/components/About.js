import React from "react";
import "../styles/about.scss";
import Person from "./Person";
import Card from "./Card";
import cards from "../data/cards";
import Navigation from "./Navigation";

const About = () => {
  return (
    <section id="about">
      <Navigation />
      <div className="content">
        <div className="drawing">
          <h1 className="typewriter">Hello World!</h1>
          <Person />
        </div>
        <div className="accordion">
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
