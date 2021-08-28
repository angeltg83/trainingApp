import React from "react";
import "../styles/Welcome.css";

const Welcome = ({ username }) => (
  <div className="container">
    <div className="Fitness-User-Info">
      <h1>Hello {username}!</h1>
    </div>
  </div>
);

export default Welcome;
