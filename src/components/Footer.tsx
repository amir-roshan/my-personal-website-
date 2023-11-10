import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <p className="copyright">
            Copyright © 2023 by Amir Roshan. All Rights Reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
