import React from "react";

const Card = ({ card }) => {
  const renderList = (text) => {
    return text.split(",").map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <details className="accordion-card">
      <summary>{card.title} . . .</summary>
      <div className="card-body">
        {card.type === "paragraph" ? (
          <p>{card.text}</p>
        ) : (
          <ul>{renderList(card.text)}</ul>
        )}
      </div>
    </details>
  );
};

export default Card;
