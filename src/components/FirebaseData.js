import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../config/FirebaseConfig";

class FirebaseData extends Component {
  constructor() {
    super();

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child("Aantal_Lift_Gebruikers");

    this.state = {
      users: 0,
      co: 0,
    };
  }

  componentDidMount() {
    this.database.on("value", (snap) => {
      this.setState({
        users: snap.val(),
      });
    });
  }

  render() {
    return (
      <>
        <h1 className="FireBaseDatah1">{this.state.users} </h1>
      </>
    );
  }
}

export default FirebaseData;
