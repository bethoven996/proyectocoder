import { Button } from "@mui/material";

function Counter({ contador, setContador, agregarAlCarrito, stock }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button
        variant="contained"
        disabled={contador <= 1}
        onClick={() => setContador(contador - 1)}
      >
        -
      </Button>
      <h4>{contador}</h4>

      <Button
        disabled={contador >= stock}
        variant="contained"
        onClick={() => setContador(contador + 1)}
      >
        +
      </Button>
      <Button variant="contained" onClick={() => agregarAlCarrito(contador)}>
        Agregar Al Carrito
      </Button>
    </div>
  );
}

export default Counter;
