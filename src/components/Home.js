import React from "react";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="sky">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
      <div className="main">
        <div className="introduction">
          <div className="name">Winnie Zhang</div>
          <div className="description">Front End Developer</div>
          <div id="see-more-btn">
            <div>Get to know me</div>
            <a href="#about">&darr;</a>
          </div>
        </div>
        <div className="tree-wrapper">
          <div className="tree">
            <div className="trunk">
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
            </div>
            <div className="leaves">
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
            </div>
          </div>
          <div className="grass"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
