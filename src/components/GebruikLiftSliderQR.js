import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import qr from "../images/qr.png";

const GrafiekGebruikLift = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Container>
        <Row className="GrafiekGebruikLiftRow">
          <Col className="GrafiekGebruikLiftCol1" xs={7}>
            <h1 className="sliderTitle">Wist je dat</h1>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              interval={4000}
              controls={false}
            >
              <Carousel.Item>
                <h1 className="sliderText">
                  Met traplopen verbrand je{" "}
                  <span className="sliderTextWhite">0,13</span> keer je eigen
                  lichaamsgewicht per minuut.
                </h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="sliderText">
                  Bij het traplopen gebruik je{" "}
                  <span className="sliderTextWhite">50</span> procent van de
                  maximale kracht in je knieën.
                </h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="sliderText">
                  Tijdens het traplopen train je{" "}
                  <span className="sliderTextWhite">bovenbeenspieren</span>,{" "}
                  <span className="sliderTextWhite">billen</span> en{" "}
                  <span className="sliderTextWhite">buikspieren</span>. Mini
                  squads
                </h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="sliderText">
                  Dat de cholesterolwaarde in je bloed aanzienlijk kan
                  verbeteren door vaker de trap te nemen.
                </h1>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="GrafiekGebruikLiftCol2" xs={{ span: 4, offset: 1 }}>
            <h4 className="qrCodeTitle">
              Scan {"&"} Check hoe dit project is gemaakt{" "}
            </h4>
            <img src={qr} className="qrCodeImage" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GrafiekGebruikLift;
