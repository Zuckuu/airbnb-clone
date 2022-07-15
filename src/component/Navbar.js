import "../App.css";
import React from "react";
import pic from "../asset/logos.png"

console.log(pic);

export default function Navbar() {
  return (
    <nav>
        <img className="nav--logo" src={pic} alt="logo" />
    </nav>
  );
}
