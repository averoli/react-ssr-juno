import React from "react";
import logo from "../../assets/logo/juno-logo.svg";
import "./style.css";
const pages = ["Marknadsplats", "Blogg", "Samarbetspartners", "Gå med gratis"];

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="Juno" />
          </li>
        </ul>
        <ul>
          {pages.map((page, index) => {
            return (
              <li key={index}>
                <button>{page}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
