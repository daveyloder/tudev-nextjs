import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import Link from "next/link";
import EventCard from "../cards/EventCard";

function EventsSection({ events }) {
  return (
    <>
      <section
        id="events"
        className="py-5"
        style={{ backgroundColor: "#621220" }}
      >
        <Container>
          <Row>
            <Col lg={2}>
              <h2 style={{ color: "white" }}>Upcoming Events</h2>
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
          <Row className="text-center">
            <Col md={12}>
              <Link
                className="btn btn-xl disabled"
                style={{
                  color: "white",
                  backgroundColor: "#a41e35",
                  outlineColor: "#a41e35",
                }}
                href="/projects"
              >
                {" "}
                See All Events
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EventsSection;
