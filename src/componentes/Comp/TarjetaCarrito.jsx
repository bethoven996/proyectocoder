import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";
function TarjetaCarrito({ item, DeleteItem }) {
  let borrar = () => {
    Swal.fire({
      title: "Seguro quieres Borrar?",
      showDenyButton: true,
      confirmButtonText: "SI",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        DeleteItem(item.id);
        Swal.fire("Borrado Con exito", "", "info");
      }
    });
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "10px",
        background: "white",
      }}
    >
      <CardMedia
        sx={{
          height: 220,
          width: 220,
          backgroundColor: "steelblue",
          objectFit: "cover",
          padding: "10px",
        }}
        image={item.img}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Precio:$ {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad: {item.cantidad}
        </Typography>
      </CardContent>
      <Button onClick={borrar}>ELIMINAR</Button>
    </Card>
  );
}

export default TarjetaCarrito;
