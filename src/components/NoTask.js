import React from "react";

import { FaCircle } from "react-icons/fa";

const NoTask = () => {
  return (
    <div className="task disabled">
      <div className="type none" />
      <FaCircle style={{ color: "white" }} />
    </div>
  );
};

export default NoTask;
