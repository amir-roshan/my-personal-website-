import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projImg1 from '../assets/coming-soon.png';
import gameHub from '../assets/Game-hub.png';

const Projects = () => {
  const projectsFirstSlide = [
    {
      title: 'Game Hub',
      description: 'React + Ts + ChakraUI + Rawg API',
      imgUrl: gameHub,
      url: 'https://game-hub-phi-woad-14.vercel.app/',
    },
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
  ];

  const projectsSecondSlide = [
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
  ];

  const projectsThirdSlide = [
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
    },
    {
      title: 'Portfolio',
      description: 'This project is presented here to demonstrate my skills.',
      imgUrl: projImg1,
      url: '',
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
                      {projectsFirstSlide.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {' '}
                    <Row>
                      {projectsSecondSlide.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    {' '}
                    <Row>
                      {projectsThirdSlide.map((project, index) => {
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
