import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function MainHeader() {
  return (
    <>
      <header
        style={{
          height: "500px",
        }}
      >
        <video
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          id="video"
          className="splash-video"
          autoPlay
          loop
          muted
        >
          <source src="/videos/owl-video.mp4" type="video/mp4" />
        </video>
        <Container className="pt-5 mb-4 text-white">
          <div className="header-content">
            <Row>
              <Col>
                <div className="header-content-inner">
                  <h1 className="display-1">TUDev</h1>
                  <h5 className="display-5">
                    Temple University&apos;s community of{" "}
                    <b>hackers &amp; makers</b>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi magnam animi numquam quaerat aliquid tenetur, nihil
                    provident, recusandae dolor natus delectus totam eveniet.
                    Voluptatum, ea assumenda. Est iste consectetur asperiores!
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <Link
                  className="btn btn-xl"
                  style={{
                    color: "white",
                    backgroundColor: "#a41e35",
                    outlineColor: "#a41e35",
                  }}
                  href=""
                >
                  Join Discord <i className="bi bi-discord" />
                </Link>{" "}
                <Link
                  className="btn btn-xl"
                  style={{
                    color: "white",
                    backgroundColor: "#a41e35",
                    outlineColor: "#a41e35",
                  }}
                  href=""
                >
                  Join The Club <i className="bi bi-people-fill" />
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </header>
    </>
  );
}

export default MainHeader;
