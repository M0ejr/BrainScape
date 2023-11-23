import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }} className="br3 ba b--black-10 b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-1 center">
        <p className="f3 white pr6 tl center">
          Brain <br /> Scape 
        </p>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }} className="br3 ba b--black-10 b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-1 center">
        <p className="f3 white pr5 center">
          Brain <br /> Scape 
        </p>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim white underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
