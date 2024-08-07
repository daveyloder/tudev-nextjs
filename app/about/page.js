"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";

function AboutPage() {
  return (
    <>
      {/* Site Header */}
      <header
        style={{
          height: "400px",
        }}
      >
        <Container className="pt-5 mb-4 text-white">
          <Row>
            <Col>
              <div className="header-content">
                <div className="header-conent-inner">
                  <h2 className="display-2">About Us</h2>
                  <h4 className="display-4">Who we are, and what we do </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <section>
        <Container>
          <Row>
            <Col>This is a section for brief description</Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col>This is a section for our officers and members roster</Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>This is a section for a call to action to join TUDev</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default AboutPage;
