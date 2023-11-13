import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const templateParams = {
    from_name: name,
    message: message,
    email: email,
    phone: phone,
  };

  function envioEmail() {
    emailjs
      .send(
        "service_o2fx5o3",
        "template_6791137",
        templateParams,
        "k29zr_2YLXAjnNExk"
      )
      .then(
        (response) => {
          console.log("Email enviado!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
        },
        (erro) => {
          console.log("Erro:", erro);
        }
      );
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
         
          <Col md={6}>
            <h2> Entrar em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={11.5} className="px-1">
                  <input
                    type="text"
                    value={name}
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>

                <Col sm={11.5} className="px-1">
                  <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col sm={11.5} className="px-1">
                  <input
                    type="text"
                    value={phone}
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
              </Row>
              <Col>
                <textarea
                  row="6"
                  value={message}
                  placeholder="Mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" onClick={envioEmail}>
                  <span>Enviar</span>
                </button>
              </Col>
            </form>
          </Col>
          <Col sm={6}>
            <span className="span-contato">E-mail para contato</span>
            <p className="p-contato">lucasassisdev@gmail.com</p>
            <span className="span-contato">E-mail para contato</span>
            <p className="p-contato">lucasassisdev@gmail.com</p>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
