import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { products } from "../../../productList/productsMock";
import { useParams } from "react-router-dom";

function ItemListContenedor() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    console.log(categoryName);
    const productosFiltrados = products.filter(
      (products) => products.category === categoryName
    );
    console.log(categoryName);

    let tareas = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tareas.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);
  console.log(products.price);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContenedor;
