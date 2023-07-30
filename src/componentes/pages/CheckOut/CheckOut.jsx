import { Box, TextField, Button, Link } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { serverTimestamp } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./CheckOut.css";
import { Navigate, useNavigate } from "react-router-dom";

function CheckOut() {
  const { SumarTotal, cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [ordenesId, setOrdenesId] = useState("");
  const [usersData, setUsersData] = useState({
    name: "",
    telefono: "",
    email: "",
    cardNumber: "",
  });
  const total = SumarTotal();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let order = {
      buyer: usersData,
      items: cart,
      total,
      data: serverTimestamp(),
    };
    let ordersColection = collection(database, "orders");
    const orderDocRef = await addDoc(ordersColection, order);
    setOrdenesId(orderDocRef.id); // Set the order ID after adding the document

    cart.forEach((item) => {
      updateDoc(doc(database, "products", item.id), {
        stock: item.stock - item.cantidad,
      });
    });

    Swal.fire(
      "Gracias por su Compra",
      `Su código de compra es ${orderDocRef.id}`,
      "success"
    );
  };

  const handleChange = (e) => {
    setUsersData({ ...usersData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {ordenesId ? (
        <div className="showIdContenedor">
          <h1>Gracias por Su compra</h1>
          <h2>{`Su código de compra es: ${ordenesId}`}</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30vw",
              margin: "5vh",
              padding: "10px",
            }}
          >
            <TextField
              sx={{
                margin: "10px",
                fontFamily: "helvetica",
              }}
              type="text"
              label="Nombre"
              name="name"
              onChange={handleChange}
              // error={errors.name ? true : false}
              // helperText={errors.name}
            ></TextField>
            <TextField
              sx={{
                margin: "10px",
                fontFamily: "helvetica",
              }}
              type="text"
              label="Telefono"
              name="telefono"
              onChange={handleChange}
              // error={errors.telefono ? true : false}
              // helperText={errors.telefono}
            ></TextField>
            <TextField
              sx={{
                margin: "10px",
                fontFamily: "helvetica",
              }}
              type="number"
              label="NumberCard"
              name="cardNumber"
              onChange={handleChange}
            ></TextField>
            <TextField
              sx={{
                margin: "10px",
                fontFamily: "helvetica",
              }}
              type="text"
              label="Email"
              name="email"
              onChange={handleChange}
              // error={errors.email ? true : false}
              // helperText={errors.email}
            ></TextField>
          </Box>
          <Box sx={{ marginLeft: "15vw" }}>
            <Button type="submit" variant="contained">
              PAGAR
            </Button>
            <div style={{ marginLeft: "30vw", marginTop: "-45vh" }}>
              <h2 style={{ fontFamily: "Helvetica" }}>
                SU TOTAL A PAGAR ES:{total}
              </h2>
            </div>
          </Box>
        </form>
      )}
    </div>
  );
}

export default CheckOut;

// initialValues: {
//     ...usersData,
//     items: cart,
//     total,
//   },
//   onSubmit: (data) => {
//     console.log(data);
//   },
//   validationSchema: Yup.object({
//     name: Yup.string()
//       .min(5, "minimo 5 caracteres")
//       .required("este Campo es obligatorio"),
//     email: Yup.string()
//       .email("tiene que se un Email valido")
//       .required("este Campo es obligatorio"),
//     telefono: Yup.string()
//       .required("este Campo es obligatorio")
//       .min(5, "minimo 5 caracteres"),
//   }),
//   validateOnChange: false,
// });
