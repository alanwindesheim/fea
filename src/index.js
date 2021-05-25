// files
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// components
import NavbarLift from "./components/NavbarLift";
import FirebaseData from "./components/FirebaseData";

const App = () => {
  return (
    <section>
      <NavbarLift />
      <FirebaseData />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
