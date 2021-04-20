import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FirebaseData from "./FirebaseData";
import elevator from "../images/elevator.png";
import co2 from "../images/co22.png";

const AantalGebruikLift = () => {
  return (
    <div>
      <Container>
        <Row className="AantalGebruikLiftRow">
          <Col className="AantalGebruiktLifCol1">
            <FirebaseData />
            <img src={elevator} className="AantalGebruikLiftImage1" alt="" />
            <h2> keer is de lift aan het werk gezet vandaag</h2>
          </Col>
          <Col className="AantalGebruiktLifCol2">
            <h1 className="FireBaseDatah1">2998</h1>
            <img src={co2} className="AantalGebruikLiftImage1" alt="" />
            <h2>zoveel kilo CO2 uitstoot is er vandaag door de lift</h2>
          </Col>
          <Col className="AantalGebruiktLifCol3">
            <h2>Euros in Hamburgers omzetten gegevens hier</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AantalGebruikLift;
