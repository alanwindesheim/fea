// files
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// components
import NavbarLift from "./components/NavbarLift";
import AantalGebruikLift from "./components/AantalGebruikLift";
import GrafiekGebruikLift from "./components/GrafiekGebruikLift";

const App = () => {
  return (
    <section>
      <NavbarLift />
      <AantalGebruikLift />
      <GrafiekGebruikLift />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
