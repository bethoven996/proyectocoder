import ProductCart from "../../Comp/ProductCart";
import FadeLoader from "react-spinners/FadeLoader";
function ItemList({ items }) {
  let arr = [1, 2, 3, 4];
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
      {items.length > 0
        ? items.map((item) => {
            return <ProductCart item={item} key={item.id} />;
          })
        : arr.map((elemento) => <FadeLoader key={elemento} color="#36d7b7" />)}
    </div>
  );
}

export default ItemList;
