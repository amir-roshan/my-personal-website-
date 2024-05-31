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
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactSVG } from 'react-svg';
import reduxIcon from '../assets/redux.svg';
import typeScript from '../assets/typescript.svg';

interface Skill {
  skill: string;
  icon: IconDefinition | null;
  customIcon?: JSX.Element;
}

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const skills: Skill[] = [
    {
      skill: 'Redux',
      icon: null,
      customIcon: <ReactSVG src={reduxIcon} className="skill-icon" />,
    },
    { skill: 'React', icon: faReact },
    { skill: 'Java', icon: faJava },
    { skill: 'JavaScript', icon: faJs },
    { skill: 'SQL', icon: faDatabase },
    { skill: 'Node.js', icon: faNodeJs },
    {
      skill: 'TypeScript',
      icon: null,
      customIcon: <ReactSVG src={typeScript} className="skill-icon" />,
    },
    { skill: 'C#', icon: null },
    { skill: 'Unity', icon: faUnity },
    { skill: 'HTML', icon: faHtml5 },
    { skill: 'CSS', icon: faCss3 },
    { skill: 'MongoDB', icon: faDatabase },
    { skill: 'Express', icon: faServer },
    { skill: 'Docker', icon: faDocker },
    { skill: '', icon: faGit },
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
                      {skill.icon && (
                        <FontAwesomeIcon
                          className="skill-icon"
                          icon={skill.icon}
                          size="lg"
                        />
                      )}
                      {skill.customIcon}
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
