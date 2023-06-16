import CartWidget from "../../Comp/CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav-Container">
      <img
        className="Logo"
        src="https://res.cloudinary.com/do9rcgcca/image/upload/v1686937500/logoTrabajoReact_w8o7jq.jpg"
        alt=""
      />
      <p className="title">Welcome to Betolos</p>
      <ul className="lista">
        <li>Inicio</li>
        <li>Contacto</li>
        <li>Productos</li>
      </ul>

      <CartWidget />
    </div>
  );
}

export default Navbar;
