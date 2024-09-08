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
import { MEMBERS } from "../../_shared/MEMBERS";
import Link from "next/link.js";

const MemberProfilePage = ({ params }) => {
  const member = MEMBERS.find((m) => m.id.toString() === params.id);

  const { name, position } = member;

  return (
    <Container className="mt-5 py-5">
      <Row className="mx-auto">
        <Col>
          <h1>{name}</h1>
          <h2>{position}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberProfilePage;
