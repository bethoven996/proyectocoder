import Badge from "@mui/material/Badge";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {
  const { cart, totalCantidad } = useContext(CartContext);
  let total = totalCantidad();
  return (
    <div className="Witget-Content">
      <div>
        <Link to={"/cart"}>
          <Badge badgeContent={total} color="primary">
            <ShoppingCartCheckoutIcon fontSize="large" />
          </Badge>
          <p>Finalizar Compra</p>
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
