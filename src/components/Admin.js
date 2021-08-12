import React from "react";
import { Helmet } from "react-helmet";
import elevator from "../images/elevator2.png";

const Admin = () => {
  return (
    <section>
      <Helmet bodyAttributes={{ style: "background-color : #fff" }} />
      <div className="adminPage">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3">
          <h1 className="AdminH1">Liftgebruik</h1>
          <img src={elevator} className="AdminImage" alt="" />
        </div>
        <div className="box4">
          <h1 className="formH1">Admin Login Page</h1>
          <h4 className="formH4">Liften beheren</h4>
          <form className="form">
            <div className="inputs">
              <input
                className="inputName"
                type="text"
                name=""
                placeholder="Email"
              />
              <input
                className="inputPassword"
                type="password"
                name=""
                placeholder="Wachtwoord"
              />
            </div>
            <button className="formButton">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admin;
