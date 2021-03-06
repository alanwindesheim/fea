import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../config/FirebaseConfig";
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Doughnut } from "react-chartjs-2";
import elevator from "../images/elevator.png";
import co2 from "../images/calorie.png";
import charger from "../images/protein-shake.png";
import { Helmet } from "react-helmet";

class Fitness extends Component {
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
    var liftEnergie = (this.state.users * 40).toFixed(0);
    var value = parseFloat(liftEnergie).toFixed(0);

    const data = {
      labels: ["Trapgebruikers", "Liftgebruikers"],
      datasets: [
        {
          label: "Vandaag",
          data: [this.state.trap, this.state.users],
          backgroundColor: ["#ff9999", "#ff0000"],
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
          <Helmet bodyAttributes={{ style: "background-color : #D5212E" }} />
          <Row className="NavbarLiftRowFitness">
            <Col>
              <h1 className="NavbarLifth1" style={{ color: "#FFC300" }}>
                LIFTGEBRUIK
              </h1>
              <h3 className="NavbarLifth3">
                Vaker de trap nemen is al een begin voor een beter toekomst van
                de aarde
              </h3>
            </Col>
          </Row>
          <Row className="AantalGebruikLiftRow">
            <Col className="AantalGebruiktLifCol1Fitness">
              <h1 className="FireBaseDataH1" style={{ color: "#FFC300" }}>
                {this.state.users}{" "}
              </h1>
              <img src={elevator} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                {" "}
                keer is de lift aan het werk gezet vandaag
              </h2>
            </Col>
            <Col className="AantalGebruiktLifCol2Fitness">
              <h1 className="FireBaseDataH1" style={{ color: "#FFC300" }}>
                {value}
              </h1>
              <img src={co2} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                zoveel calorie??n zijn er vandaag NIET verbrand met de lift
              </h2>
            </Col>
            <Col className="AantalGebruiktLifCol3Fitness">
              <h1 className="FireBaseDataH1" style={{ color: "#FFC300" }}>
                {Math.round((this.state.users * 0.183) / 2.5).toFixed(0)}
              </h1>
              <img src={charger} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                zoveel eiwitshakes kon er gehaald worden
              </h2>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="NavbarLiftRowFitness">
            <Col>
              <h1 className="NavbarLifth1">
                IK KIES VOOR DUURZAAMHEID EN JIJ?
              </h1>
              <h3 className="NavbarLifth3">De statistieken van vandaag</h3>
            </Col>
          </Row>
          <Row className="GrafiekGebruikLiftRow">
            <Col className="GrafiekGebruikLiftCol1Fitness">
              <h2 className="GrafiekGebruikLiftH2Text1">
                {this.state.trap}
                <h2 id="GrafiekGebruikLiftH2Text1KleurFitness"> helden </h2>
                gingen de trap op vandaag
              </h2>
              <div className="GrafiekGebruikLiftCol1Streep"></div>
              <h2 className="GrafiekGebruikLiftH2Text2">
                {this.state.users}
                <h2 id="GrafiekGebruikLiftH2Text2KleurFitness">
                  energieslurpers
                </h2>
                gingen met de lift vandaag
              </h2>
            </Col>
            <Col className="GrafiekGebruikLiftCol2Fitness">
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

export default Fitness;
