import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../config/FirebaseConfig";
import { Container, Row, Col, Image } from "react-bootstrap";
import elevator from "../images/elevator.png";
import co2 from "../images/co22.png";
import burger from "../images/burger.png";
import qr from "../images/qr.png";
import { Bar } from "react-chartjs-2";

class FirebaseData extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child("Aantal_Lift_Gebruikers");

    this.state = {
      users: 0,
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
    var g = (this.state.users * 0.09).toFixed(2);
    var value = parseFloat(g).toFixed(2);

    const data = {
      labels: ["23 Mei", "24 Mei", "25 Mei", "26 Mei", "Vandaag"],
      datasets: [
        {
          label: "Liftgebruikers",
          data: [90, 87, 80, 75, this.state.users],
          borderColor: ["rgba(255,0,255)"],
          backgroundColor: ["rgba(255,0,255)"],
          color: ["rgba(255,0,255)"],
          pointBackgroundColor: "rgba(255,0,255)",
          pointBorderColor: "rgba(255,0,255)",
        },
        {
          label: "Trapgebruikers",
          data: [76, 83, 87, 90, this.state.users * 2],
          borderColor: ["rgba(255,255,0)"],
          backgroundColor: ["rgba(255,255,0)"],
          pointBackgroundColor: "rgba(255,255,0)",
          pointBorderColor: "rgba(255,255,0)",
        },
      ],
    };
    return (
      <div>
        <Container>
          <Row className="AantalGebruikLiftRow">
            <Col className="AantalGebruiktLifCol1">
              <h1 className="FireBaseDataH1">{this.state.users} </h1>
              <img src={elevator} className="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                {" "}
                keer is de lift aan het werk gezet vandaag
              </h2>
            </Col>
            <Col className="AantalGebruiktLifCol2">
              <h1 className="FireBaseDataH1">{value}</h1>
              <img src={co2} className="AantalGebruikLiftImage1" alt="" />
              <h2>zoveel kilo CO2 uitstoot is er vandaag door de lift</h2>
            </Col>
            <Col className="AantalGebruiktLifCol3">
              <h1 className="FireBaseDataH1">
                {this.state.users * 0.02 * 1.25}
              </h1>
              <img src={burger} className="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                Zoveel hamburgers kon er gehaald worden met de kosten van de
                lift
              </h2>
            </Col>
          </Row>
          <Row className="GrafiekGebruikLiftRow">
            <Col className="GrafiekGebruikLiftCol1">
              <Bar data={data} />
            </Col>
            <Col className="GrafiekGebruikLiftCol2">
              <h4 className="qrCodeTitle">
                Scan {"&"} Check hoe dit project is gemaakt{" "}
              </h4>
              <Image src={qr} className="qrCodeImage" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FirebaseData;
