import React from "react";
import logoWhite  from "../../assets/logo/juno-logo-white.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="grid">
          <img src={logoWhite} alt="Juno"/>
          <div>
            <p>KARRIÄRER</p>
            <p>SAMARBETSPARTNERS</p>
          </div>
          <div>
            <p>MARKNADSPLATS</p>
            <p>BLOGG</p>
          </div>
          <div>
            <p><small>© 2022 Juno. Alla rättigheter förbehållna.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
