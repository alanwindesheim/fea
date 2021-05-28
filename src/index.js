// files
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// components
import FirebaseData from "./components/FirebaseData";

const App = () => {
  return (
    <section>
      <FirebaseData />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
