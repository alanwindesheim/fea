import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../config/FirebaseConfig";
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Doughnut } from "react-chartjs-2";
import elevator from "../images/elevator.png";
import co2 from "../images/co22.png";
import charger from "../images/charge.png";

class FirebaseData extends Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app
      .database()
      .ref()
      .child("Aantal_Lift_Gebruikers/Aantal_Lift_Gebruikers");
    this.database2 = this.app
      .database()
      .ref()
      .child("Aantal_Trap_Gebruikers/Aantal_Trap_Gebruikers");
    this.state = {
      users: 0,
      trap: 0,
    };
  }

  componentDidMount() {
    this.database.on("value", (snap) => {
      this.setState({
        users: snap.val(),
      });
    });
    this.database2.on("value", (snap) => {
      this.setState({
        trap: snap.val(),
      });
    });
  }

  render() {
    var liftEnergie = (this.state.users * 0.09).toFixed(2);
    var value = parseFloat(liftEnergie).toFixed(2);

    const data = {
      labels: ["Trapgebruikers", "Liftgebruikers"],
      datasets: [
        {
          label: "Vandaag",
          data: [this.state.trap, this.state.users],
          backgroundColor: ["#DDA0DD", "#FF00FF"],
          hoverOffset: 2,
        },
      ],
    };

    return (
      <Carousel
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        autoPlay
        infiniteLoop={true}
        stopOnHover={false}
        interval={8000}
      >
        <Container>
          <Row className="NavbarLiftRow">
            <Col>
              <h1 className="NavbarLifth1">LIFTGEBRUIK</h1>
              <h3 className="NavbarLifth3">
                Vaker de trap nemen is al een begin voor een beter toekomst van
                de aarde
              </h3>
            </Col>
          </Row>
          <Row className="AantalGebruikLiftRow">
            <Col className="AantalGebruiktLifCol1">
              <h1 className="FireBaseDataH1">{this.state.users} </h1>
              <img src={elevator} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                {" "}
                keer is de lift aan het werk gezet vandaag
              </h2>
            </Col>
            <Col className="AantalGebruiktLifCol2">
              <h1 className="FireBaseDataH1">{value}</h1>
              <img src={co2} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                zoveel kilo CO2 uitstoot is er vandaag door de lifts
              </h2>
            </Col>
            <Col className="AantalGebruiktLifCol3">
              <h1 className="FireBaseDataH1">
                {Math.round((this.state.users * 0.02) / 0.18).toFixed(0)}
              </h1>
              <img src={charger} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                zoveel mobiele telefoons konden er opgeladen worden
              </h2>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="NavbarLiftRow">
            <Col>
              <h1 className="NavbarLifth1">
                IK KIES VOOR DUURZAAMHEID EN JIJ?
              </h1>
              <h3 className="NavbarLifth3">De statistieken van vandaag</h3>
            </Col>
          </Row>
          <Row className="GrafiekGebruikLiftRow">
            <Col className="GrafiekGebruikLiftCol1">
              <h2 className="GrafiekGebruikLiftH2Text1">
                {this.state.trap}
                <h2 id="GrafiekGebruikLiftH2Text1Kleur"> helden </h2>gingen de
                trap op vandaag
              </h2>
              <div className="GrafiekGebruikLiftCol1Streep"></div>
              <h2 className="GrafiekGebruikLiftH2Text2">
                {this.state.users}
                <h2 id="GrafiekGebruikLiftH2Text2Kleur">energieslurpers</h2>
                gingen met de lift vandaag
              </h2>
            </Col>
            <Col className="GrafiekGebruikLiftCol2">
              <Doughnut
                height={500}
                width={450}
                data={data}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Carousel>
    );
  }
}

export default FirebaseData;
