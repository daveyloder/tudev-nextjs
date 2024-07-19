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
import Image from "next/image";

import { EVENTS } from "./shared/EVENTS";
import { MEMBERS } from "./shared/MEMBERS";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import OfficersSection from "@/components/sections/OfficersSection";
import MainHeader from "@/components/headers/MainHeader";

export default function Home() {
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
      <MainHeader />

      {/* Site Header */}
      {/* About Section */}
      <AboutSection />
      {/* About Section - end */}
      {/* Upcoming Events Section */}
      <EventsSection events={EVENTS} />
      {/* Upcoming Events Section - end */}
      {/* Officers Section */}
      <OfficersSection officers={MEMBERS} />
      {/* <section id="officers" className="py-5">
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
      </section> */}
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
