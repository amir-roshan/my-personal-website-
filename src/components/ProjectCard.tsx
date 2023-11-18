import React from 'react';
import { Col } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
  url,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
