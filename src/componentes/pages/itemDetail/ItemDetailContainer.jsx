import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productList/productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../../firebaseConfig";

import { getDoc, collection, doc } from "firebase/firestore";

function ItemDetailContainer() {
  const [product, setProducts] = useState([]);
  let { id } = useParams();
  const { AddToCart, EncontrarId } = useContext(CartContext);
  useEffect(() => {
    let refColec = collection(database, "products");
    let refDoc = doc(refColec, id);
    getDoc(refDoc).then((res) => setProducts({ ...res.data(), id: res.id }));
  }, [id]);
  let CantidadEnCarrito = EncontrarId(id);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      cantidad: cantidad,
    };
    AddToCart(data);
    toast.success("Producto Agregado!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <ItemDetail
        item={product}
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
        CantidadEnCarrito={CantidadEnCarrito}
      />
      <ToastContainer />
    </div>
  );
}

export default ItemDetailContainer;
