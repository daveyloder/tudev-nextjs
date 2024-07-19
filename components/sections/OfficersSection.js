import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function OfficersSection({ officers }) {
  return (
    <>
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
              if (officer.officer) {
                let className = "text-center col-md-6 col-sm-6 col-xs-6";

                {
                  /* if (officers.length - 1 <= 2) {
                  className =
                    "text-center col-md-offset-4 col-md-6 col-sm-6 col-xs-6";
                } else if (index === 0) {
                  className =
                    "text-center col-md-offset-4 col-md-3 col-sm-6 col-xs-6";
                } */
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
                      <h4
                        className="text-muted mt-3"
                        style={{ fontWeight: 500 }}
                      >
                        {officer.name}
                      </h4>
                      <p className="text-muted">{officer.position}</p>
                    </Link>
                  </div>
                );
              }
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OfficersSection;
