"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default function Admin() {
  return (
    <>
      <>
        <header
          style={{
            height: "400px",
          }}
        >
          <Container className="pt-5 mb-4 text-white">
            <Row>
              <Col sm={7}>
                <div className="header-content">
                  <div className="header-content-inner">
                    <h1 className="display-1">Admin</h1>
                    <h4 className="display-4">This page is not ready yet</h4>
                    <p>
                      You should probably click <Link href="/">here</Link> to go
                      back to home. Do not click links on the navbar for the
                      love of god!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row> </Row>
          </Container>
        </header>
      </>
    </>
  );
}
