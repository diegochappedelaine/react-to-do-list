import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>react-to-do-list</h1>
        <div className="logo">
          <div className="type work" />
          <div className="type personnal" />
          <div className="type urgent" />
        </div>
      </div>
    </header>
  );
};

export default Header;
