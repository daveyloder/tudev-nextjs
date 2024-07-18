import React from "react";

import { Container, Row, Col } from "reactstrap";

function ProjectsPage() {
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
              <h2 className="display-2">Projects</h2>
              <h4 className="display-4">A showcase of member projects</h4>
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
      {/* Projects Grid */}
      <section id="projects" className="py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Current Projects</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProjectsPage;
