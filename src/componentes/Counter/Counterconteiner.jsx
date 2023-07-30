import { useState } from "react";
import Counter from "./Counter";
function Counterconteiner({ agregarAlCarrito, stock, CantidadEnCarrito = 1 }) {
  const [contador, setContador] = useState(CantidadEnCarrito);

  return (
    <div>
      <Counter
        contador={contador}
        setContador={setContador}
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
      />
    </div>
  );
}

export default Counterconteiner;
