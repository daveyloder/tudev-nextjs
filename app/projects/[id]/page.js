"use client";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Github, GithubIcon, Presentation } from "lucide-react";
import Head from "next/head.js";
import { PROJECTS } from "../../_shared/PROJECTS.js";
import Link from "next/link.js";

const ProjectDetailPage = ({ params }) => {
  const project = PROJECTS.find((p) => p.id.toString() === params.id);
  const {
    projectTitle,
    projectImage,
    projectDescription,
    projectAuthor,
    projectDate,
    projectLinks,
  } = project;

  return (
    <>
      <Head>
        <title>{projectTitle}</title>
        <meta
          name="description"
          content={projectDescription.substring(0, 160)}
        />
      </Head>
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              <CardBody>
                <CardTitle tag="h1">{projectTitle}</CardTitle>
                <CardText tag="h6" className="mb-2 text-muted">
                  By {projectAuthor} | Presented on {projectDate}
                </CardText>
                <img
                  src={projectImage}
                  width={400}
                  height={150}
                  className="img-fluid rounded mb-3"
                />
                {project.projectDescription
                  .split(`\n\n`)
                  .map((paragraph, index) => (
                    <CardText key={index}>{paragraph}</CardText>
                  ))}
                <CardText>
                  {projectLinks.map((link, index) => {
                    if (Object.keys(link).length === 0) {
                      return null;
                    }

                    return (
                      <div key={index}>
                        <p>
                          {link.name}: <Link href={link.href}>{link.href}</Link>
                        </p>
                      </div>
                    );
                  })}
                  {/* <ul>
                    <li>
                      <Link href={projectLink}>
                        <Presentation color="black" size={24} />
                      </Link>
                    </li>
                    <li>
                      <Link href={githubLink}>
                        <GithubIcon color="black" size={24} />
                      </Link>
                    </li>
                  </ul> */}
                </CardText>
                <Link className="btn btn-dark " href="/projects">
                  ← Back to all posts
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <section className="my-5" style={{ height: "400px" }}>
        <Container className="pt-5 mb-4 mt-5">
          <Row>
            <Col md={8} className="mx-auto">
              <Card>
                <CardBody>
                  <CardTitle tag="h1">{projectTitle}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    By {projectAuthor} | Presented on {projectDate}
                  </CardSubtitle>
                  <img
                    src={projectImage}
                    width={400}
                    height={150}
                    className="img-fluid rounded mb-3"
                  />
                  <CardText>{projectDescription}</CardText>
                  <CardText>
                    Links:
                    <div>
                      <Link href={githubLink}>
                        <Github size={24} />
                      </Link>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
      {/* <Row>
            <Col md={8} className="mx-auto">
              <h1 className="text-3xl font-bold mb-4">
                {project.projectTitle}
              </h1>
              <p className="text-gray-600 mb-4">{project.projectDescription}</p>
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                <ul className="list-disc list-inside">
                  <li>Start Date: {project.startDate}</li>
                  <li>End Date: {project.endDate}</li>
                  <li>Status: {project.status}</li>
                </ul>
              </div>
            </Col>
          </Row> */}
      {/* </Container>
      </section> */}
    </>
  );
};

export default ProjectDetailPage;
