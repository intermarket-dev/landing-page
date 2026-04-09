import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/icono_intermarket-removebg-preview.png";

const Encabezado = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Para detectar la ruta actual

  const manejarNavegacion = (ruta) => {
    navigate(ruta);
  };

  const esCatalogo =
    location.pathname === "/catalogo" &&
    localStorage.getItem("usuario-supabase") === null;

  return (
    <Navbar expand="lg" fixed="top" className="navbar shadow-sm">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand
          onClick={() => manejarNavegacion(esCatalogo ? "/catalogo" : "/")}
          className="navbar-brand d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            alt="Logo InterMarket"
            src={logo}
            width="42"
            height="42"
            className="d-inline-block me-2"
          />
          <span>
            <strong>InterMarket</strong>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="intermarket-navbar" className="border-0" />
        <Navbar.Collapse id="intermarket-navbar" className="justify-content-between align-items-center">
          <Nav className="navbar-links mx-auto align-items-center">
            <Nav.Link onClick={() => manejarNavegacion("/")} className="nav-link">
              El Problema
            </Nav.Link>
            <Nav.Link onClick={() => manejarNavegacion("/Beneficios")} className="nav-link">
              Beneficios
            </Nav.Link>
            <Nav.Link onClick={() => manejarNavegacion("/Equipo")} className="nav-link">
              Equipo
            </Nav.Link>
            <Nav.Link onClick={() => manejarNavegacion("/#faq")} className="nav-link">
              FAQ
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <button
              type="button"
              className="btn boton-beta"
              onClick={() => manejarNavegacion("/Beneficios")}
            >
              Únanse a la Beta
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Encabezado;
