import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              {/* Coloca aquí tu logotipo o texto del logotipo */}
              Motos Seguras, Confiables y al mejor precio
            </div>
            <div className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Contacto</a>
              {/* Agrega más enlaces si es necesario */}
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Mi Aplicación. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
}

export default Footer;
