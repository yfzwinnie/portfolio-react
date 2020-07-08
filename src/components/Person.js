import React from "react";
import "../styles/person.scss";

const Person = () => {
  return (
    <figure className="person">
      <div className="hair">
        <div className="hair-part"></div>
        <div className="hair-part"></div>
        <div className="hair-part"></div>
        <div className="hair-part"></div>
        <div className="back-hair">
          <div className="back-hair-spot"></div>
          <div className="back-hair-spot"></div>
        </div>
      </div>
      <div className="face">
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="nose"></div>
        <div className="mouth">
          <div className="teeth"></div>
          <div className="tongue"></div>
        </div>
        <div className="face-bottom"></div>
      </div>
      <div className="neck"></div>
    </figure>
  );
};

export default Person;
