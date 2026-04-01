import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../App.css";

function Equipo() {
  return (
    <Container className="mt-5 mb-5 fade-section">
      <Row className="mb-4">
        <Col>
          <h2 className="hero-title">Proyecto Real: InterMarket</h2>
          <p className="hero-text">
            Muestra tu proyecto real con evidencia de trabajo en equipo, tecnología aplicada y objetivos alcanzados.
            Aquí está una demo lista para compartir con clientes y reclutadores.
          </p>
          <Button
            className="btn-cta"
            onClick={() => window.open("https://github.com/intermarket-dev/InterMarket.git", "_blank")}
          >
            Ver repositorio GitHub
          </Button>
        </Col>
      </Row>

   <Col className="colab">Colaboradores</Col>

      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {[
          { name: "Laura Marina", rol: "Project Manager", github: "lauracarrasco", email: "ana@intermarket.com", avatar: "L", avatarClass: "avatar-A" },
          { name: "Santos Rios", rol: "Frontend, Backend", github: "riossantos32", email: "riossantos340@gmail.com", avatar: "S", avatarClass: "avatar-C" },
          { name: "Joseth Gatica", rol: "Backend, BaseDatos", github: "josethgatica", email: "maria@intermarket.com", avatar: "M", avatarClass: "avatar-M" },
          
        ].map((miembro) => (
          <Col key={miembro.name} className="d-flex">
            <Card className="team-card w-100 text-center p-4">
              <Card.Body>
                <div className={`team-avatar ${miembro.avatarClass}`}>{miembro.avatar}</div>
                <Card.Title className="fs-5 fw-bold">{miembro.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{miembro.rol}</Card.Subtitle>

                <div className="team-links">
                  <a
                    href={`https://github.com/${miembro.github}`}
                    target="_blank"
                    rel="noreferrer"
                    title={`GitHub de ${miembro.name}`}
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-github"></i>
                    <span className="ms-1" style={{ fontSize: '0.8rem' }}>GitHub</span>
                  </a>
                  <a
                    href={`mailto:${miembro.email}`}
                    title={`Enviar correo a ${miembro.name}`}
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-envelope-fill"></i>
                    <span className="ms-1" style={{ fontSize: '0.8rem' }}>Gmail</span>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="card-promo p-3">
            <Card.Body>
              <Card.Title>Contacto rápido</Card.Title>
              <p className="card-text">
                Escríbenos a <a href="mailto:tucorreo@gmail.com" className="text-warning">tucorreo@gmail.com</a> y conversemos sobre tu siguiente solución digital.
              </p>
              <p className="card-text">
                GitHub del equipo:
                <a
                  href="https://github.com/tu-organizacion"
                  target="_blank"
                  rel="noreferrer"
                  className="text-warning ms-1"
                >
                  github.com/tu-organizacion
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Equipo;
