import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
// import projImg1 from '../assets/coming-soon.png';

import gameHub from '../assets/projects-img/Game-hub.png';
import movieApp from '../assets/projects-img/movie-app.png';
import sushiRestaurant from '../assets/projects-img/sushi.png';
import nike from '../assets/projects-img/nike.png';
import vr from '../assets/projects-img/vr.png';
import hooBank from '../assets/projects-img/hoo-bank.png';
import fitness from '../assets/projects-img/fitness.png';

const Projects = () => {
  const projectsFirstSlide = [
    {
      title: 'Game Hub',
      description: 'React + Ts + ChakraUI + Rawg API',
      imgUrl: gameHub,
      url: 'https://game-hub-phi-woad-14.vercel.app/',
    },
    {
      title: 'Movie App',
      description: 'React + TypeScript + Vite',
      imgUrl: movieApp,
      url: 'https://cosmic-semolina-3c982d.netlify.app/',
    },
    {
      title: 'Sushi Restaurant',
      description: 'HTML, CSS and Vanilla JS',
      imgUrl: sushiRestaurant,
      url: 'https://deluxe-crisp-2bf289.netlify.app/',
    },
    {
      title: 'Nike',
      description: 'Nike Website with Tailwind CSS and React',
      imgUrl: nike,
      url: 'https://guileless-puppy-d4672a.netlify.app/',
    },
    {
      title: 'VR Website',
      description: 'React + JavaScript + Tailwind CSS',
      imgUrl: vr,
      url: 'https://melodic-narwhal-eb1f9d.netlify.app/',
    },
    {
      title: 'Hoo Bank',
      description: 'React + JavaScript + CSS',
      imgUrl: hooBank,
      url: 'https://papaya-dodol-152431.netlify.app/',
    },
    {
      title: 'Fitness Tracker',
      description: 'RapidAPI + React + JavaScript + CSS',
      imgUrl: fitness,
      url: 'https://precious-youtiao-380a70.netlify.app/',
    },
  ];

  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Here are some of the projects I have worked on.</p>

              <Tab.Container id="projects-tabs" defaultActiveKey="first>">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      Tap Here to see the projects.
                    </Nav.Link>
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
