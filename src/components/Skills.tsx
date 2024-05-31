import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  faReact,
  faJava,
  faJs,
  faNodeJs,
  faDocker,
  faCss3,
  faHtml5,
  faGit,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faServer,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactSVG } from 'react-svg';
import reduxIcon from '../assets/redux.svg';
import typeScript from '../assets/typescript.svg';

interface Skill {
  skill: string;
  icon: IconDefinition | null;
  customIcon?: JSX.Element;
  url: string;
}

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  const skills: Skill[] = [
    {
      skill: 'Redux',
      icon: null,
      customIcon: <ReactSVG src={reduxIcon} className="skill-react-icon" />,
      url: 'https://redux.js.org/',
    },
    { skill: 'React', icon: faReact, url: 'https://reactjs.org/' },
    { skill: 'Java', icon: faJava, url: 'https://www.java.com/' },
    {
      skill: 'JavaScript',
      icon: faJs,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { skill: 'SQL', icon: faDatabase, url: 'https://www.w3schools.com/sql/' },
    { skill: 'Node.js', icon: faNodeJs, url: 'https://nodejs.org/en/' },
    {
      skill: 'TypeScript',
      icon: null,
      customIcon: <ReactSVG src={typeScript} className="skill-react-icon" />,
      url: 'https://www.typescriptlang.org/',
    },
    {
      skill: 'C#',
      icon: faCode,
      url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    { skill: 'Unity', icon: faUnity, url: 'https://unity.com/' },
    {
      skill: 'HTML',
      icon: faHtml5,
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      skill: 'CSS',
      icon: faCss3,
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    { skill: 'MongoDB', icon: faDatabase, url: 'https://www.mongodb.com/' },
    { skill: 'Express', icon: faServer, url: 'https://expressjs.com/' },
    { skill: 'Docker', icon: faDocker, url: 'https://www.docker.com/' },
    { skill: '', icon: faGit, url: 'https://git-scm.com/' },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2 className="skill-heading">Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <h5>
                      {skill.skill}
                      <a className="icon-link" href={skill.url} target="_blank">
                        {skill.icon && (
                          <FontAwesomeIcon
                            className="skill-icon"
                            icon={skill.icon}
                            size="lg"
                          />
                        )}
                        {skill.customIcon}
                      </a>
                    </h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
