"use client";

import React from "react";

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
import Link from "next/link";

export default function Home() {
  const officers = [
    {
      id: 1,
      name: "David Loder",
      position: "President",
      photo:
        "https://media.licdn.com/dms/image/C4D03AQGSN-GRtU86Rg/profile-displayphoto-shrink_400_400/0/1599928236140?e=1722470400&v=beta&t=cL00GxHI4ICOvH-VYxwg4iTUMwZ_Ys7gpNCRi_iFb8c",
      linkedIn: "https://www.linkedin.com/in/daveloder/",
    },
    {
      id: 2,
      name: "Elle Nyugen",
      position: "Vice President",
      photo:
        "https://media.licdn.com/dms/image/D4E03AQGUWi0QJysBiA/profile-displayphoto-shrink_400_400/0/1689784752348?e=1722470400&v=beta&t=g4AydLoWapGeo5mrCLgaKnEGcx2O4b_FBqBbb5j41V8",
      linkedIn: "https://www.linkedin.com/in/elle-nguyen-124177225/",
    },
  ];

  const events = [
    {
      id: 1,
      eventTitle: "Event",
      eventDescription:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      eventImage: "https://picsum.photos/seed/picsum/300/200?.webp",
      startDateTime: "",
      endDateTime: "",
    },
    {
      id: 2,
      eventTitle: "Event",
      eventDescription:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      eventImage: "https://picsum.photos/seed/picsum/300/200?.webp",
      startDateTime: "",
      endDateTime: "",
    },
    {
      id: 3,
      eventTitle: "Event",
      eventDescription:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      eventImage: "https://picsum.photos/seed/picsum/300/200?.webp",
      startDateTime: "",
      endDateTime: "",
    },
  ];
  const projects = [
    {
      id: 1,
      projectTitle: "Why You Need A NAS",
      projectDescription:
        "A short project on why you need a home Network Accessed Server demostrated using TrueNas Scale",
      projectAuthor: "David Loder",
      projectLink: "",
      featuredProject: true,
    },
    {
      id: 2,
      projectTitle: "I made a Black Hole",
      projectDescription:
        "How I taught myself to render a simulation of a black hole on my computer",
      projectAuthor: "John Doe",
      projectLink: "/",
      featuredProject: true,
    },
    {
      id: 3,
      projectTitle: "You need a website",
      projectDescription:
        "Why you need a website, using Avata a WordPress plugin",
      projectAuthor: "John Doe",
      projectLink: "/",
      featuredProject: true,
    },
  ];
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
              <h1 className="display-1">TUDev</h1>
              <h4 className="display-4">A club for makers and techies</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                magnam animi numquam quaerat aliquid tenetur, nihil provident,
                recusandae dolor natus delectus totam eveniet. Voluptatum, ea
                assumenda. Est iste consectetur asperiores!
              </p>
            </Col>
          </Row>
          <Row> </Row>
        </Container>
      </header>
      {/* Site Header */}
      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="">
                <img
                  src="/images/logo-red.png"
                  alt="TUDev logo"
                  className="img-fluid"
                  style={{ width: "40px" }}
                />
                <br />
                <br />
                <h2>What We Do</h2>
                <p className="text-muted">
                  We are a community of designers, developers, hackers, and
                  makers.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4}>
              <h1>
                <i className="bi bi-lightning"></i>
              </h1>
              <h3 style={{ fontWeight: 500 }}>Hackathons</h3>
              <p className="text-muted">
                We attend tons of hackathons throughout the year. We were ranked
                by Major League Hacking as the 14th most active hacking
                community in North America for the Spring 2016 season.
              </p>
            </Col>
            <Col md={4}>
              <h1>
                <i className="bi bi-motherboard-fill"></i>
              </h1>
              <h3 style={{ fontWeight: 500 }}>Code Demos</h3>
              <p className="text-muted">
                We host several hands-on programming demos throughout the
                semester on topics like Python, Twitter Scraping, or Chrome
                Extensions. No coding experience required!
              </p>
            </Col>
            <Col md={4}>
              <h1>
                <i className="bi bi-people"></i>
              </h1>
              <h3 style={{ fontWeight: 500 }}>Networking</h3>
              <p className="text-muted">
                Getting involved with TUDev means surrounding yourself with
                other smart, motivated hackers and a talented and growing alumni
                network, leading to more opportunities down the road.
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={12}>
              <Link className="btn btn-outline btn-xl disabled" href="/about">
                {" "}
                Find Out More
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About Section - end */}
      {/* Upcoming Events Section */}
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
            <Col>
              <p style={{ color: "white" }}>Comming Soon!</p>
            </Col>
          </Row>
          <Row>
            {events.map((event) => {
              return (
                <Col key={event.id} lg={6} className="mb-4">
                  <Card>
                    <CardImg src={event.eventImage} className="card-img-top" />
                    <CardBody>
                      <CardTitle tag="h5">{event.eventTitle}</CardTitle>
                      <CardText>{event.eventDescription}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
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
      {/* Upcoming Events Section - end */}
      {/* Officers Section */}
      <section id="officers" className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div>
                <h1>
                  <i
                    className="bi bi-person-circle"
                    style={{ color: "#a41e35" }}
                  ></i>
                </h1>
                <h2>Our Officers</h2>
                <hr />
              </div>
            </Col>
          </Row>
          <Row>
            {officers.map((officer, index) => {
              let className = "whoweare text-center col-md-3 col-sm-6 col-xs-6";

              if (index === 0) {
                className =
                  "whoweare text-center col-md-offset-4 col-md-3 col-sm-6 col-xs-6";
              }
              if (officers.length - 1 <= 2) {
                className =
                  "whoweare text-center col-md-offset-4 col-md-6 col-sm-6 col-xs-6";
              }
              return (
                <div key={officer.id} className={className}>
                  <Link
                    href={officer.linkedIn}
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <img
                      className="img-fluid rounded"
                      style={{ width: "150px" }}
                      src={officer.photo}
                      alt="officer photo"
                    />
                    <h4 className="text-muted mt-3" style={{ fontWeight: 500 }}>
                      {officer.name}
                    </h4>
                    <p className="text-muted">{officer.position}</p>
                  </Link>
                </div>
              );
            })}
          </Row>
        </Container>
      </section>
      {/* Officers Section - end */}
      {/* Projects Section */}
      <section
        id="projects"
        className="py-5"
        style={{ backgroundColor: "#621220" }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <h2 style={{ color: "white" }}>Featured Projects</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ color: "white" }}>Comming Soon!</p>
            </Col>
          </Row>
          <Row>
            {projects.map((project) => {
              if (project.featuredProject) {
                return (
                  <Col key={project.id} lg="4" className="mb-4">
                    <Card>
                      <CardBody>
                        <CardTitle tag="h5">{project.projectTitle}</CardTitle>
                        <CardSubtitle>By {project.projectAuthor}</CardSubtitle>
                        <CardText>{project.projectDescription}</CardText>
                        <Link
                          className="btn btn-secondary"
                          href={project.projectLink}
                        >
                          Project Link
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
          <Row className="text-center">
            <Col md={12}>
              <Link
                className="btn btn-xl"
                style={{
                  color: "white",
                  backgroundColor: "#a41e35",
                  outlineColor: "#a41e35",
                }}
                href="/projects"
              >
                {" "}
                Check Out More
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
