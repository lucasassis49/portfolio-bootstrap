import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCards";

import intranet from "../assets/intranet.png";
import portfolio from "../assets/LLADEV.png"
import intranet1 from "../assets/intranet1.png"
import vob from "../assets/vob.png"


export const Projects = () => {
  const projects = [
    {
      title: "Intranet América",
      description:"Sistema criado para auxilio nas informações internas da empresa ( React + Firebase )",
      imgUrl: intranet1,
      site:"https://americavistosonline.com/",
      repository:"https://github.com/lucasassis49/Intranet-america"
    },
    {
      title: "Portfolio 1.0",
      description: "Portfolio 1.0 feito em Next + Tailwind",
      imgUrl: portfolio,
      site:"https://americavistosonline.com/",
      repository:"https://github.com/lucasassis49/Intranet-america"
    },
    {
      title: "Portfolio 2.0",
      description: "Portfolio 2.0 feito em React",
      imgUrl: intranet1,
      site:"https:///",
      repository:"https://github.com/lucasassis49/portfolio-bootstrap"
    },
    {
      title:"Loja Vob",
      description:"Loja E-Commerce de moda feminina",
      imgUrl:vob,
      
      
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
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
      <img className="background-image-right" src={intranet} alt="projects"></img>
    </section>
  );
};
