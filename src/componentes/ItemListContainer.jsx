function ItemListContainer({ saludo }) {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h2>{saludo}</h2>
    </div>
  );
}

export default ItemListContainer;
