import React from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="header_logo"
          src="https://i.ibb.co/Xs0CxLD/logo.png"
          alt=""
        />
      </div>
      <div className="header-center">
        <form>
          <FiSearch size={18} className="header-icon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </form>
      </div>
      <div className="header-right">
        <button>Serach</button>
      </div>
    </div>
  );
};

export default Navbar;
