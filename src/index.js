import React from "react";
import ReactDom from "react-dom";
// import Exercises from "./pages/Exercises";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("root");

ReactDom.render(<App />, container);
