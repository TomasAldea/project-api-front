import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div id="navbar">
  <ul> 
	<li><Link to="/">go home</Link></li> 
	<li><Link to="/projectform">create project</Link></li> 
  <li><Link to="/recipe">recipe api test</Link></li> 

  </ul> 
    </div>
  );
}
