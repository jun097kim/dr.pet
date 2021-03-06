import React from "react";
import "./Footer.scss";

const Footer = ({ children }) => {
  return (
    <div className="Footer">
      <div className="container content">
        <div className="footer-top">{children}</div>
        <div className="copyright">© 2019 Dr.Pet Corp.</div>
      </div>
    </div>
  );
};

export default Footer;
