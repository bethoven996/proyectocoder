import Badge from "@mui/material/Badge";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import "./CartWidget.css";
import { Link } from "react-router-dom";
function CartWidget() {
  return (
    <div className="Witget-Content">
      <div>
        <PeopleAltIcon fontSize="large" />
        <p>Crear Cuenta</p>
      </div>
      <div>
        <MeetingRoomIcon fontSize="large" />
        <p>Iniciar Sesion</p>
      </div>
      <div>
        <Link to={"/cart"}>
          <Badge badgeContent={7} color="primary">
            <ShoppingCartCheckoutIcon fontSize="large" />
          </Badge>
          <p>Finalizar Compra</p>
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
