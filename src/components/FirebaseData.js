import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../config/FirebaseConfig";
import { Container, Row, Col, Image, Fade } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Doughnut, Bar } from "react-chartjs-2";
import elevator from "../images/elevator.png";
import co2 from "../images/co22.png";
import charger from "../images/charge.png";
import qr from "../images/qr.png";
import smiley from "../images/smiley.png"
import sad from "../images/sad.png"


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
      labels: [
        'Trapgebruikers',
        'Liftgebruikers',
      ],
      datasets: [{
        label: 'Vandaag',
        data: [25, 67],
        backgroundColor: [
          'yellow',
          'red'
        ],
        hoverOffset: 2
      }]
    };


    return (
        
      <Carousel showArrows={false} 
                showIndicators={false} 
                showStatus={false}
                autoPlay
                infiniteLoop={true}
                stopOnHover={false}
                interval={6000}
      >
          <Container >
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
              <h2>zoveel kilo CO2 uitstoot is er vandaag door de lift</h2>
            </Col>
            <Col className="AantalGebruiktLifCol3">
              <h1 className="FireBaseDataH1">
                {(Math.round(this.state.users * 0.02 / 0.18)).toFixed(0)}
                
              </h1>
              <img src={charger} id="AantalGebruikLiftImage1" alt="" />
              <h2 className="AantalGebruiktH2">
                Zoveel mobiele telefoons konden er opgeladen worden 
              </h2>
            </Col>
          </Row>
          </Container>

        <Container>
        <Row className="NavbarLiftRow">
          <Col>
            <h1 className="NavbarLifth1">IK KIES VOOR DUURZAAMHEID EN JIJ?</h1>
            <h3 className="NavbarLifth3">
              De statistieken van vandaag
            </h3>
          </Col>
        </Row>
          <Row className="GrafiekGebruikLiftRow">
          <Col className="GrafiekGebruikLiftCol1">
            <h2 className="navbarlefttop">25<p id="greentext">helden</p>gingen de trap op</h2>
            <br></br>
            <h2 className="navbarleftbottom">67<p id="redtext">energieslurpers</p>gingen met de lift</h2>
          </Col>
            <Col className="GrafiekGebruikLiftCol1">
              <Doughnut height={500}
                        width={450} 
                        data={data}
                        options={{
                          maintainAspectRatio: false
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
