import { createContext, useState } from "react";
export const CartContext = createContext();

function CartContextComponet({ children }) {
  const [cart, setCart] = useState([]);
  const AddToCart = (producto) => {
    let existe = cart.some((elemento) => elemento.id === producto.id);
    if (existe) {
      let nuevoArr = cart.map((elemento) => {
        if (producto.id === elemento.id) {
          return {
            ...elemento,
            cantidad: producto.cantidad,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArr);
    } else {
      setCart([...cart, producto]);
    }
  };
  const DeleteItem = (id) => {
    let newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  const totalCantidad = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };
  const SumarTotal = () => {
    let precio = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.cantidad;
    }, 0);

    return precio;
  };
  const EncontrarId = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);
    return producto?.cantidad;
  };

  let data = {
    cart,
    AddToCart,
    DeleteItem,
    totalCantidad,
    SumarTotal,
    EncontrarId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextComponet;
