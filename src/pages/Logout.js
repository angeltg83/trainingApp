import React from "react";

const Logout = () => {
  localStorage.clear("token");
  localStorage.clear('user')
  
};



export default Logout;
