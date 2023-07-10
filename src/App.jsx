import Navbar from "./componentes/layout/NavbarContainer";
import CartContainer from "./componentes/pages/Cart/CartContainer";
import ItemDetailContainer from "./componentes/pages/itemDetail/ItemDetailContainer";
import ItemListContenedor from "./componentes/pages/ItemList/ItemListContenedor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContenedor />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContenedor />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<h2> 404 --- NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ` ` `
