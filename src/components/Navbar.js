import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks ? "open" : "close"}>
        <img src={logo} alt="img" />
        {/* <div className="hiddenList">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
