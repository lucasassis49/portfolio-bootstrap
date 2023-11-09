import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCards";

import intranet from "../assets/INTRANET.png";
import portfolio from "../assets/LLADEV.png"

export const Projects = () => {
  const projects = [
    {
      title: "Intranet América",
      description:"Sistema criado para auxilio nas informações internas da empresa",
      imgUrl: intranet,
      site:"https://americavistosonline.com/",
      repository:"https://github.com/lucasassis49/Intranet-america"
    },
    {
      title: "Portfolio 1.0",
      description: "Portfolio 1.0",
      imgUrl: portfolio,
    },
    {
      title: "Intranet América",
      description: "Intranet América",
      imgUrl: intranet,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p></p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">1° Página</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">2° Página</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  3° Página
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project,index)=> {
                      return(
                        <ProjectsCard 
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Ainda não tem projetos na página</Tab.Pane>
              <Tab.Pane eventKey="third">Ainda não tem projetos na página</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={intranet}></img>
    </section>
  );
};
