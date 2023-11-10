import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

const Contact: React.FC = () => {
  const [showGmail, setShowGmail] = useState(false);
  const sectionRef = useRef(null);

  // Define a function to handle the intersection with the section
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setShowGmail(true);
    } else {
      setShowGmail(false);
    }
  };

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
    });

    // Observe the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <section className="contact" id="connect" ref={sectionRef}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="p-3">
            <h2 className="text-center">Get In Touch</h2>
            <div className={`gmail-link ${showGmail ? "show" : ""}`}>
              <a
                className="text-center"
                href="mailto:amirvalielahi@gmail.com"
                id="email"
              >
                amirvalielahi@gmail.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
