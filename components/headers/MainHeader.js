import { Container, Row, Col } from "reactstrap";

function MainHeader() {
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
              <h1 className="display-1">TUDev</h1>
              <h4 className="display-4">A club for makers and techies</h4>
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
    </>
  );
}

export default MainHeader;
