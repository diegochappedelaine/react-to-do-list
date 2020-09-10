import React from "react";

const SetTypeButton = ({ type, setType, value }) => {
  const nameCapitalized = value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <button
      type="button"
      className="select-button"
      onClick={() => (type !== value ? setType(value) : setType(null))}
    >
      <div className={type === value ? `select ${value}` : "select"} />
      <span>{nameCapitalized}</span>
    </button>
  );
};

export default SetTypeButton;
