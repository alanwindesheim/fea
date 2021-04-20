import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GrafiekGebruikLift = () => {
  return (
    <div>
      <Container>
        <Row className="GrafiekGebruikLiftRow">
          <Col className="GrafiekGebruikLiftCol1" xs={7}>
            <h2>Hier een Grafiek, van hoevaak de lift is gebruikt</h2>
          </Col>
          <Col className="GrafiekGebruikLiftCol2" xs={{ span: 4, offset: 1 }}>
            <h2>Slider met wist je dats over kcal en mileu</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GrafiekGebruikLift;
