import React from "react";
import "../styles/about.scss";
import Person from "./Person";

const About = () => {
  return (
    <section id="about">
      <div className="content">
        <div className="drawing">
          <h1 className="typewriter">Hello World!</h1>
          <Person />
        </div>
        <div className="accordion">
          <details className="accordion-card">
            <summary>I started coding because ...</summary>
            <div className="card-body">
              I wanted to add special effects and animation to my MySpace
              website back in middle school (scrolling marquee, embedded music
              player, and falling snowballs ... it was consider cool back then).
              After that I created my very first website on Expage with the help
              of Google. I didn't know at the time that I was coding and had no
              idea this could turn into a career!
              <br />
              <br />
              Fast forward 15 years later, I'm living in Seattle and decided to
              attend a Girls Who Code meetup to learn SQL and ended up learning
              about LaunchCode, a free seven month coding bootcamp. I applied
              for the program immediately and got accepted and thus begin my
              coding journey!
            </div>
          </details>
          <details className="accordion-card">
            <summary>I am passionate about ...</summary>
            <div className="card-body">
              <ul>
                <li>Intuitive User Interface</li>
                <li>Accessibility</li>
                <li>Continuous Learning</li>
                <li>Mentorship & Training</li>
              </ul>
              <ul>
                <li>Animal Welfare</li>
                <li>Sustainability</li>
                <li>Arts & Crafts</li>
                <li>Gardening</li>
                <li>Cooking</li>
              </ul>
            </div>
          </details>
          <details className="accordion-card">
            <summary>I've been learning ...</summary>
            <div className="card-body">
              <ul>
                <li>Machine Learning</li>
                <li>Flexbox</li>
                <li>Animation</li>
              </ul>
            </div>
          </details>
          <details className="accordion-card">
            <summary>I've been described as ...</summary>
            <div className="card-body">
              <ul>
                <li>Creative</li>
                <li>Efficient</li>
                <li>Fast Learner</li>
                <li>Organize</li>
                <li>Catalyst for change</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default About;
