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
            <Col sm={7}>
              <div className="header-content">
                <div className="header-content-inner">
                  <h1 className="display-1">404</h1>
                  <h4 className="display-4">This page is not found</h4>
                  <p>
                    You should probably click <Link href="/">here</Link> to go
                    back to home.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row> </Row>
        </Container>
      </header>
    </>
  );
}

export default NotFoundHeader;
