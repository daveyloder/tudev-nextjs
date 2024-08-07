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
                    <Card
                      style={{
                        minHeight: "250px",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <CardImg
                        src={event.eventImage}
                        className="card-img-top"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{event.eventTitle}</CardTitle>
                        <CardText>{event.eventDescription}</CardText>
                      </CardBody>
                    </Card>
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
