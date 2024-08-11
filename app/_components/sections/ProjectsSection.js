import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Link from "next/link";

import ProjectCard from "../cards/ProjectCard";
function ProjectsSection({ projects }) {
  const [sortedProjects, setSortedProjects] = useState([]);

  useEffect(() => {
    const newSortedProjects = projects.sort(
      (a, b) => new Date(b.projectDate) - new Date(a.projectDate)
    );

    setSortedProjects(newSortedProjects);
  }, []);
  return (
    <>
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
            {sortedProjects.length == 0 || sortedProjects == null ? (
              <Col className="text-center text-white mb-4">
                <h4>Currently No Featured Projects</h4>
                <p>Please check back later!</p>
                {/* <LoadingSpinner /> */}
              </Col>
            ) : (
              sortedProjects.map((project) => {
                if (project.featuredProject) {
                  return (
                    <Col key={project.id} lg={4} md={4} sm={6} className="mb-4">
                      <ProjectCard project={project} />;
                    </Col>
                  );
                }
              })
            )}
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
                href="projects"
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

export default ProjectsSection;
