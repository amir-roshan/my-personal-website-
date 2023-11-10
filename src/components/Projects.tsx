import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/coming-soon.png";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "This project is presented here to demonstrate my skills.",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio",
      description: "This project is presented here to demonstrate my skills.",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio",
      description: "This project is presented here to demonstrate my skills.",
      imgUrl: projImg1,
    },
  ];

  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>These are the projects that I have worked on them.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first>">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third"> Tab Three</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {" "}
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    {" "}
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        {/* <img className="background-image-right" src={}></img> */}
      </section>
    </>
  );
};

export default Projects;
