import Counterconteiner from "../../Counter/Counterconteiner";
import ProductCart from "../../Comp/ProductCart";
function ItemDetail({ item, agregarAlCarrito, stock, CantidadEnCarrito }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductCart item={item} key={item.id} />
      </div>
      <Counterconteiner
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
        CantidadEnCarrito={CantidadEnCarrito}
      />
    </div>
  );
}

export default ItemDetail;
