import React from "react";
import { Link } from "react-router-dom";

import buttomImg from "../images/add.png";
import "../styles/AddButton.css";
const AddButton = () => (
  <Link to="/product/new">
    <img src={buttomImg} className="Fitness-Add" />
  </Link>
);

export default AddButton;
