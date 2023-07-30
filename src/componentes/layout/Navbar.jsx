import CartWidget from "../Comp/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="Nav-Container">
        <Link to={"/"}>
          <img
            style={{ width: "90px", height: "100%" }}
            className="Logo"
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1686937500/logoTrabajoReact_w8o7jq.jpg"
            alt=""
          />
        </Link>
        <Link to={"/admin"}>Administrador</Link>
        <ul className="lista">
          <Link to={"/"}>
            <li>Todas </li>
          </Link>
          <Link to={"/category/urbanas"}>
            <li>Urbanas</li>
          </Link>
          <Link to={"/category/deportivas"}>
            <li>Deportivas</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
