import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

function Beneficios() {
  return (
    <Container className="mt-5 fade-section">
      <h2 className="hero-title">Beneficios claves para tu software</h2>
      <p className="hero-text">
        Presenta tus ventajas más importantes y demuestra el ROI a decisión de tus clientes.
      </p>
      <Row xs={1} md={3} className="g-4 mt-3">
        {[
          { title: "Eficiencia", text: "Automatización de procesos, menos errores y más velocidad de entrega." },
          { title: "Colaboración", text: "Herramientas de comunicación y control de proyecto en tiempo real." },
          { title: "Escalabilidad", text: "Arquitectura preparada para crecer con tu empresa y usuarios." },
        ].map((item) => (
          <Col key={item.title}>
            <Card className="card-promo h-100 p-3">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Beneficios;
