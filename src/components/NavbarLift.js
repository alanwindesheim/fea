import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NavbarLift = () => {
  return (
    <div>
      <Container>
        <Row className="NavbarLiftRow">
          <Col>
            <h1 className="NavbarLifth1">LIFTGEBRUIK</h1>
            <h3 className="NavbarLifth3">
              Vaker de trap nemen is al een begin voor een mooiere toekomst van
              de aarde
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarLift;
