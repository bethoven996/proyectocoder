import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productList/productsMock";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
  const [product, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productoSeleccionado = products.find((product) => product.id === +id);
      resolve(productoSeleccionado);
    });
    promesa
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      cantidad: cantidad,
    };
  };
  return (
    <div>
      <ItemDetail
        item={product}
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
      />
    </div>
  );
}

export default ItemDetailContainer;
