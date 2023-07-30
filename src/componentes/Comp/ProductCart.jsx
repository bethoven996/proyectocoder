import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
function ProductCart({ item }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
      }}
    >
      <CardMedia
        sx={{
          height: 140,
        }}
        image={item.img}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio:$ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/detalle/${item.id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProductCart;
