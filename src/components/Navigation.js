import React from "react";
import "../styles/navigation.scss";

const Navigation = () => {
  const navigation = ["about", "skills", "projects", "contact"];
  return (
    <aside>
      <div className="side-nav">
        <div className="nav-line"></div>
        <ul className="bubble-wrapper">
          {navigation.map((section) => (
            <li className="bubble" key={section}>
              <a href={`#${section}`} aria-label={section}>
                &#9675;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
