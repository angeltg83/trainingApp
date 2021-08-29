import React from "react";
import { Link } from "react-router-dom";

import buttomImg from "../images/logout.png";
import "../styles/logout.css";
// const LogoutButton = () => (
//   <Link to="/logout">
//     <img src={buttomImg} className="Fitness-Add" />
//   </Link>
// );

class Logout extends React.Component {
  render() {
    return <img src={buttomImg} onClick={this.props.logout} className="btn_logout" />;
  }
}

export default Logout;
