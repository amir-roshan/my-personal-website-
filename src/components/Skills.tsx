import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>
                Skills
                <p></p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <h5>React</h5>
                  </div>

                  <div className="item">
                    <h5>Redux</h5>
                  </div>

                  <div className="item">
                    <h5>JavaScript</h5>
                  </div>

                  <div className="item">
                    <h5>SQL</h5>
                  </div>

                  <div className="item">
                    <h5>Node.js</h5>
                  </div>

                  <div className="item">
                    <h5>TypeScript</h5>
                  </div>

                  <div className="item">
                    <h5>C#</h5>
                  </div>

                  <div className="item">
                    <h5>Unity</h5>
                  </div>

                  <div className="item">
                    <h5>HTML & CSS</h5>
                  </div>

                  <div className="item">
                    <h5>MongoDB</h5>
                  </div>

                  <div className="item">
                    <h5>Express</h5>
                  </div>

                  <div className="item">
                    <h5>Docker</h5>
                  </div>

                  <div className="item">
                    <h5>Git</h5>
                  </div>
                </Carousel>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
