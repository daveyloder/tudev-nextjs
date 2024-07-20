import React from "react";
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

function ProjectsSection({ projects }) {
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
            {projects.length == 0 ? (
              <Col className="text-center text-white mb-4">
                <h4>Currently No Featured Projects</h4>
                <p>Please check back later!</p>
              </Col>
            ) : (
              projects.map((project) => {
                if (project.featuredProject) {
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
              })
            )}

            {/* {projects.map((project) => {
             
                if (project.featuredProject) {
                  return (
                    <Col key={project.id} lg="4" className="mb-4">
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
              
            })} */}
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
