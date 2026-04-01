import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../assets/icono_intermarket-removebg-preview.png";


const Encabezado = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Para detectar la ruta actual

  const manejarToggle = () => setMostrarMenu(!mostrarMenu);

  const manejarNavegacion = (ruta) => {
    navigate(ruta);
    setMostrarMenu(false);
  };

  const cerrarSesion = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

     
    } catch (error) {
      console.error("Error cerrando sesión:", error.message);
    }
  };

  // Detectar rutas especiales
  const esLogin = location.pathname === "/login";
  const esCatalogo =
    location.pathname === "/catalogo" &&
    localStorage.getItem("usuario-supabase") === null;

  // Contenido del menú
  let contenidoMenu;

  if (esLogin) {
    contenidoMenu = (
      <Nav className="ms-auto pe-2">
        <Nav.Link
          onClick={() => manejarNavegacion("/login")}
          className={mostrarMenu ? "color-texto-marca" : "text-white"}
        >
          <i className="bi-person-fill-lock me-2"></i>
          Iniciar sesión
        </Nav.Link>
      </Nav>
    );
  } else if (esCatalogo) {
    contenidoMenu = (
      <Nav className="ms-auto pe-2">
        <Nav.Link
          onClick={() => manejarNavegacion("/catalogo")}
          className={mostrarMenu ? "color-texto-marca" : "text-white"}
        >
          <i className="bi-images me-2"></i>
          <strong>Catálogo</strong>
        </Nav.Link>
      </Nav>
    );
  } else {
    contenidoMenu = (
      <>
        <Nav className="ms-auto pe-2">
          <Nav.Link
            onClick={() => manejarNavegacion("/")}
            className={mostrarMenu ? "color-texto-marca" : "text-white"}
          >
            {mostrarMenu ? <i className="bi-house-fill me-2"></i> : null}
            <strong>Caracteristicas</strong>
          </Nav.Link>

          <Nav.Link
            onClick={() => manejarNavegacion("/Beneficios")}
            className={mostrarMenu ? "color-texto-marca" : "text-white"}
          >
            {mostrarMenu ? <i className="bi-bookmark-fill me-2"></i> : null}
            <strong>Beneficios</strong>
          </Nav.Link>

          
          {/* Opción para ir al catálogo público desde admin */}
          <Nav.Link
            onClick={() => manejarNavegacion("/Equipo")}
            className={mostrarMenu ? "color-texto-marca" : "text-white"}
          >
            {mostrarMenu ? <i className="bi-images me-2"></i> : null}
            <strong>Equipo</strong>
          </Nav.Link>

          <hr />

          {/* Ícono cerrar sesión en barra superior */}
          
          <hr />
        </Nav>

        <div className="mt-3">
          <strong>Enlaces rápidos</strong>
          <div className="d-flex flex-column gap-2 mt-2">
            <a
              className="text-decoration-none"
              href="https://github.com/tu-organizacion"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi-github me-2"></i>Ver GitHub
            </a>
            <a className="text-decoration-none" href="mailto:tucorreo@gmail.com">
              <i className="bi-envelope-fill me-2"></i>Enviar correo
            </a>
            <a
              className="text-decoration-none"
              href="https://tu-proyecto-real.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi-box-arrow-up-right me-2"></i>Ir a proyecto real
            </a>
          </div>
        </div>

        {/* Información de usuario y botón cerrar sesión */}
        {mostrarMenu && (
          <div className="mt-3 p-3 rounded bg-light text-dark">
            <p className="mb-2">
              <i className="bi-envelope-fill me-2"></i>
              
            </p>

          </div>
        )}
      </>
    );
  }

  return (
    <Navbar expand="lg" fixed="top" className="navbar shadow-sm">
      <Container>
        <Navbar.Brand
          onClick={() => manejarNavegacion(esCatalogo ? "/catalogo" : "/")}
          className="text-dark fw-bold d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            alt=""
            src={logo}
            width="45"
            height="45"
            className="d-inline-block me-2"
          />
          <span>
            <strong>InterMarket</strong>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="intermarket-navbar" />
        <Navbar.Collapse id="intermarket-navbar" className="justify-content-end">
          <Nav className="me-4">
            <Nav.Link onClick={() => manejarNavegacion("/")} className="nav-link">Caracteristicas</Nav.Link>
            <Nav.Link onClick={() => manejarNavegacion("/Beneficios")} className="nav-link">Beneficios</Nav.Link>
            <Nav.Link onClick={() => manejarNavegacion("/Equipo")} className="nav-link">Equipo</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Encabezado;
