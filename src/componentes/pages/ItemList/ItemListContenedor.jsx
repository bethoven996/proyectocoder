import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { database } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContenedor() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    let ref = collection(database, "products");
    if (!categoryName) {
      consulta = ref;
    } else {
      consulta = query(ref, where("category", "==", categoryName));
    }
    getDocs(consulta).then((res) => {
      let newArr = res.docs.map((products) => {
        return { ...products.data(), id: products.id };
      });
      setItems(newArr);
    });
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContenedor;
