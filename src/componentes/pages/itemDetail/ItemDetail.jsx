import Counterconteiner from "../../Counter/Counterconteiner";
import ProductCart from "../../Comp/ProductCart";
function ItemDetail({ item, agregarAlCarrito, stock }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductCart sx={{}} item={item} key={item.id} />
      </div>
      <Counterconteiner agregarAlCarrito={agregarAlCarrito} stock={stock} />
    </div>
  );
}

export default ItemDetail;
