import ProductCart from "../../Comp/ProductCart";
function ItemList({ items }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "20px",
      }}
    >
      {items.map((item) => {
        return <ProductCart item={item} key={item.id} />;
      })}
    </div>
  );
}

export default ItemList;
