import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/Header-img.png";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full-stack Developer", "Game Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const intervalSpeed = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(intervalSpeed);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById("email");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my website</span>
            <h1>
              {`Hi, I'm Amir Roshan, `}
              <span className="wrap">{text}</span>
            </h1>

            <p className="bio">
              I'm Amir, a 20-year-old dedicated to the world of coding. I'm
              currently pursuing my education at BCIT and specialize as a full
              stack developer. My passion for coding drives me to constantly
              learn and grow in this ever-evolving field.
            </p>
            <button onClick={scrollToEmail}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
