// files
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// components
import NavbarLift from "./components/NavbarLift";
import FirebaseData from "./components/FirebaseData";
import GebruikLiftSliderQR from "./components/GebruikLiftSliderQR";

const App = () => {
  return (
    <section>
      <NavbarLift />
      <FirebaseData />
      <GebruikLiftSliderQR />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
