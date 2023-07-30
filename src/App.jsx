import Navbar from "./componentes/layout/NavbarContainer";
import CartContainer from "./componentes/pages/Cart/CartContainer";
import ItemDetailContainer from "./componentes/pages/itemDetail/ItemDetailContainer";
import ItemListContenedor from "./componentes/pages/ItemList/ItemListContenedor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextComponet from "./Context/CartContext";
import CheckOut from "./componentes/pages/CheckOut/CheckOut";
import Footer from "./componentes/layout/Footter/Footer";
import Admin from "./componentes/pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponet>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContenedor />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContenedor />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Admin" element={<Admin />} />
          </Route>

          <Route path="*" element={<h2> 404 --- NOT FOUND</h2>} />
        </Routes>
        <Footer />
      </CartContextComponet>
    </BrowserRouter>
  );
}

export default App;

// ` ` `
