import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

function NotFoundHeader({ title, subheader, text }) {
  return (
    <>
      <header
        style={{
          height: "400px",
        }}
      >
        <Container className="pt-5 mb-4 text-white">
          <Row>
            <Col>
              <h1 className="display-1">404</h1>
              <h4 className="display-4">This page is not found</h4>
              <p>
                You should probably click <Link href="/">here</Link> to go back
                to home. Do not click links on the navbar for the love of god!
              </p>
            </Col>
          </Row>
          <Row> </Row>
        </Container>
      </header>
    </>
  );
}

export default NotFoundHeader;
