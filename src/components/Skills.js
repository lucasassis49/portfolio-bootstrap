import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import next from "../assets/next.png";
import node from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import mysql from "../assets/mysql.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={react} alt="ImageReact" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={next} alt="ImageNext" />
                  <h5>Next</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="ImageType" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={node} alt="ImageNode" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="ImageHtml" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="ImageCss" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="ImageJs" />
                  <h5>JS</h5>
                </div>
                
                <div className="item">
                  <img src={tailwind} alt="ImageTailwind" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="ImageFirebase" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="ImageMysql" />
                  <h5>MySql</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
