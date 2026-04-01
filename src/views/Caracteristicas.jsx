import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Caracteristicas = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="hero-section fade-section">
        <Row className="align-items-center gy-4">
          <Col lg={7}>
            <h1 className="hero-title">Transforma tu forma de trabajar en equipo</h1>
            <p className="hero-text">
              Software colaborativo de alto impacto para equipos de desarrollo, marketing y producto.
              Tu proyecto en producción con mejor experiencia, más velocidad, y resultados visibles.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button className="btn-cta" size="lg" onClick={() => navigate("/Equipo")}>Ver proyecto realizado</Button>
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => window.open("https://intermarket2.netlify.app/", "_blank")}
              >
                Ver proyecto en vivo
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            <Card className="card-promo p-4">
              <Card.Body>
                <Card.Title>Lo que incluye</Card.Title>
                <ListGroup variant="flush" className="mt-3">
                  <ListGroup.Item>Diseño responsivo (mobile/desktop)</ListGroup.Item>
                  <ListGroup.Item>Integración con API, base de datos y auth</ListGroup.Item>
                  <ListGroup.Item>Publicación en hosting</ListGroup.Item>
                  <ListGroup.Item>Equipo con workflow ágil y control de versiones</ListGroup.Item>
                </ListGroup>
                <small className="text-muted mt-3 d-block">Déjate inspirar con el proyecto en equipo.</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="section-blanca section-detalles fade-section">
        <Row>
          <Col md={4}>
            <Card className="card-promo p-3 mb-3">
              <Card.Body>
                <Card.Title>Características</Card.Title>
                <Card.Text>
                  Interfaz moderna, performance mejorada, y componentes reutilizables.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-promo p-3 mb-3">
              <Card.Body>
                <Card.Title>Beneficios</Card.Title>
                <Card.Text>
                  Mayor conversión, ahorro de tiempo y transparencia total del desarrollo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-promo p-3 mb-3">
              <Card.Body>
                <Card.Title>Equipo</Card.Title>
                <Card.Text>
                  Roles claros, comunicación directa y entrega continua con calidad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="footer-page">
        <p>
          Link rápido: <a className="social-links" href="https://github.com/tu-organizacion">GitHub</a> •
          <a className="social-links" href="mailto:tucorreo@gmail.com">Gmail</a> •
          <a className="social-links" href="https://tu-proyecto-real.com">Demo</a>
        </p>
      </div>
    </>
  );
};

export default Caracteristicas;