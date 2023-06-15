import "./Navbar.css";
import CartWidget from "../common/cartWidget/CartWidget";
function Navbar() {
  return (
    <div className="navContainer">
      <p>hola como andas?</p>
      <CartWidget />
    </div>
  );
}

export default Navbar;
