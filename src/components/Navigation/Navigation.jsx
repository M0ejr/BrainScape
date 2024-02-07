import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav className="nav-container signed-in">
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
        <p className="logo">BrainScape</p>
      </nav>
    );
  } else {
    return (
      <nav className="nav-container">
        <p
          onClick={() => onRouteChange("signin")}
          className="nav-link white"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="nav-link white"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;