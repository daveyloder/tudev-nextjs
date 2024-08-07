"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  InputGroupText,
} from "reactstrap";
import Link from "next/link";

import { PROJECTS } from "../_shared/PROJECTS";

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

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
                  <h2 className="display-2">Projects</h2>
                  <h4 className="display-4">A showcase of member projects </h4>
                  <p>
                    On this page you will find a library of previous, and
                    current projects of all of our members. Check them out and
                    see what inspires you!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row> </Row>
        </Container>
      </header>
      {/* Site Header */}
      {/* Projects Grid */}
      <section id="projects" className="py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Current Projects</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <p>Please use the search bar to find projects</p>
            </Col>
          </Row>
          {/* Search bar for projects*/}
          <Row>
            <Col lg={8}>
              <InputGroup>
                <InputGroupText style={{ backgroundColor: "#621220" }}>
                  <i className="bi bi-search text-white" />
                </InputGroupText>
                <Input
                  placeholder="Search Projects..."
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="pt-5">
            {PROJECTS.filter((project) => {
              if (searchQuery === "") {
                return project;
              } else if (project) {
                return (
                  project.projectTitle
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  project.projectAuthor
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  project.projectDescription
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  project.projectDate
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                );
              }
            }).map((project) => {
              if (project) {
                if (project.projectLink == null || project.projectLink == "") {
                  return (
                    <Col key={project.id} lg={4} md={4} sm={6} className="mb-4">
                      <Card
                        style={{
                          minHeight: "250px",
                          height: "100%",
                          overflow: "auto",
                        }}
                      >
                        <CardBody>
                          <CardTitle tag="h5">{project.projectTitle}</CardTitle>
                          <CardSubtitle>
                            By {project.projectAuthor}
                          </CardSubtitle>
                          <CardText>{project.projectDescription}</CardText>
                          <CardText>Presented: {project.projectDate}</CardText>
                          <Link
                            className="btn btn-secondary disabled"
                            href={project.projectLink}
                          >
                            No Link
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={project.id} lg={4} md={4} sm={6} className="mb-4">
                      <Card
                        style={{
                          minHeight: "250px",
                          height: "100%",
                          overflow: "auto",
                        }}
                      >
                        <CardBody>
                          <CardTitle tag="h5">{project.projectTitle}</CardTitle>
                          <CardSubtitle>
                            By {project.projectAuthor}
                          </CardSubtitle>
                          <CardText>{project.projectDescription}</CardText>
                          <CardText>Presented: {project.projectDate}</CardText>
                          <Link
                            className="btn btn-secondary"
                            href={project.projectLink}
                            target="_blank"
                          >
                            Project Link
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                }
              }
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProjectsPage;
