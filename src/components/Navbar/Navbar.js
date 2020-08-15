import React, { useState, useEffect } from "react";
import "./Navbar.css";

const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png";
const AVATAR =
  "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav-black"}`}>
        <img className="nav-logo" src={LOGO} alt="Netflix Logo" />
        <img className="nav-avatar" src={AVATAR} alt="Netflix Logo" />
      </div>
    </>
  );
};

export default Navbar;
