import { database } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { products } from "../../../productList/productsMock";
import { Button } from "@mui/material";
function Admin() {
  const rellenar = () => {
    let refColection = collection(database, "products");
    products.forEach((produc) => {
      addDoc(refColection, produc);
    });
  };
  return (
    <>
      <Button onClick={rellenar}> RELLENAR</Button>
    </>
  );
}

export default Admin;
