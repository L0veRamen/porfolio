import React from "react";
import "./footer.css";
import bg_png from "../../../assets/Home/shape-bg.png"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={bg_png}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
