"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupText,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import Link from "next/link";
import EventCard from "../_components/cards/EventCard";

import { EVENTS2 } from "../_shared/EVENTS";

const events = EVENTS2;

function EventPage() {
  return (
    <>
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
                  <h2 className="display-2">Events</h2>
                  <h4 className="display-4">What is happening </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <section>
        <Container className="py-5">
          {" "}
          <Row className="mb-4">
            <Col lg={12}>
              <h2>Upcoming Events</h2>
              {/* <p>Please use the search bar to find projects</p> */}
            </Col>
          </Row>
          <Row>
            {events.length == 0 ? (
              <Col className="text-center text-white mb-4">
                <h4>Currently No Events</h4>
                <p>Please check back later!</p>
              </Col>
            ) : (
              events.map((event) => {
                return (
                  <Col key={event.id} lg={4} md={4} sm={6} className="mb-4">
                    <Link
                      style={{ textDecoration: "none" }}
                      href={event.eventLink}
                      target="_blank"
                    >
                      <EventCard event={event} />
                    </Link>
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EventPage;
