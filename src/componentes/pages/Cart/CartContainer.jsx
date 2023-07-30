import { useContext } from "react";

import { CartContext } from "../../../Context/CartContext";
import TarjetaCarrito from "../../Comp/TarjetaCarrito";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function CartContainer() {
  const { cart, DeleteItem, SumarTotal } = useContext(CartContext);
  let total = SumarTotal();
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <TarjetaCarrito item={item} DeleteItem={DeleteItem} />
          </div>
        );
      })}
      <h1 style={{ fontFamily: "Helvetica", color: "peru" }}>
        Su total es de {total} $
      </h1>
      {cart.length !== 0 ? (
        <Link to={"/CheckOut"}>
          <Button variant="contained">Finalizar Compra</Button>
        </Link>
      ) : null}
    </div>
  );
}

export default CartContainer;
